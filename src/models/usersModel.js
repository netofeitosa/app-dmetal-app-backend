const {
  PrismaClient: PrismaClientMySQL,
} = require("../../prisma/generated/mysql");
const prismaMySQL = new PrismaClientMySQL();

const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const getAll = async () => {
  return await prismaMySQL.users.findMany();
};

const createUser = async (login, usuario, nome, senha, image_url) => {
  const token = uuidv4();
  const hashedPassword = await bcrypt.hash(senha, saltRounds);

  return await prismaMySQL.users.create({
    data: {
      login: login,
      usuario: usuario,
      nome: nome,
      image_url: image_url,
      senha: hashedPassword,
      token: token,
    },
  });
};

const deleteUser = async (login) => {
  return await prismaMySQL.users.delete({
    where: { login: login },
  });
};

const findUserUsuario = async (user) => {
  return await prismaMySQL.users.findFirst({
    where: { usuario: user },
  });
};

const findUserLogin = async (login) => {
  return await prismaMySQL.users.findFirst({
    where: { login: login },
  });
};

const findUserToken = async (authToken) => {
  return await prismaMySQL.users.findFirst({
    where: { token: authToken },
  });
};

module.exports = {
  getAll,
  createUser,
  deleteUser,
  findUserUsuario,
  findUserLogin,
  findUserToken,
};

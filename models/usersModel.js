const {
  PrismaClient: PrismaClientMySQL,
} = require("../prisma/generated/mysql");
const prismaMySQL = new PrismaClientMySQL();

const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const getAll = async () => {
  try {
    const users = await prismaMySQL.users.findMany();
    return users;
  } catch (error) {
    throw error;
  }
};

const createUser = async (login, usuario, nome, senha) => {
  const token = uuidv4();
  const hashedPassword = await bcrypt.hash(senha, saltRounds);

  return await prismaMySQL.users.create({
    data: {
      login: login,
      usuario: usuario,
      nome: nome,
      senha: hashedPassword,
      token: token,
    },
  });
};

const findUser = async (usuario, login) => {
  return prismaMySQL.users.findFirst({
    where: { OR: [{ usuario: usuario }, { login: login }] },
  });
};

module.exports = {
  getAll,
  createUser,
  findUser,
};

const _ = require("lodash");

const {
  PrismaClient: PrismaClientMySQL,
} = require("../../prisma/generated/mysql");
const prismaMySQL = new PrismaClientMySQL();

const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const getAll = async () => {
  const dados = await prismaMySQL.vw_users.findMany();

  const groupedUsers = _.groupBy(dados, "id");

  const result = _.map(groupedUsers, (userGroup) => {
    const user = userGroup[0];
    return {
      id: user.id,
      login: user.login,
      usuario: user.usuario,
      nome: user.nome,
      image_url: user.image_url,
      senha: user.senha,
      token: user.token,
      roles: userGroup.map((u) => u.role),
    };
  });

  return result;
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
  const dados = await prismaMySQL.vw_users.findMany({
    where: { usuario: user },
  });

  const groupedUsers = _.groupBy(dados, "id");

  const result = _.map(groupedUsers, (userGroup) => {
    const user = userGroup[0];
    return {
      id: user.id,
      login: user.login,
      usuario: user.usuario,
      nome: user.nome,
      image_url: user.image_url,
      senha: user.senha,
      token: user.token,
      roles: userGroup.map((u) => u.role),
    };
  });

  return result;
};

const findUserLogin = async (login) => {
  const dados = await prismaMySQL.vw_users.findMany({
    where: { login: login },
  });

  const groupedUsers = _.groupBy(dados, "id");

  const result = _.map(groupedUsers, (userGroup) => {
    const user = userGroup[0];
    return {
      id: user.id,
      login: user.login,
      usuario: user.usuario,
      nome: user.nome,
      image_url: user.image_url,
      senha: user.senha,
      token: user.token,
      roles: userGroup.map((u) => u.role),
    };
  });

  return result;
};

const findUserToken = async (authToken) => {
  const dados = await prismaMySQL.vw_users.findMany({
    where: { token: authToken },
  });

  const groupedUsers = _.groupBy(dados, "id");

  const result = _.map(groupedUsers, (userGroup) => {
    const user = userGroup[0];
    return {
      id: user.id,
      login: user.login,
      usuario: user.usuario,
      nome: user.nome,
      image_url: user.image_url,
      senha: user.senha,
      token: user.token,
      roles: userGroup.map((u) => u.role),
    };
  });

  return result;
};

module.exports = {
  getAll,
  createUser,
  deleteUser,
  findUserUsuario,
  findUserLogin,
  findUserToken,
};

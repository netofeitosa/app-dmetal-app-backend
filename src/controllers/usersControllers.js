const bcrypt = require("bcrypt");
const usersModel = require("../models/usersModel");

const getAll = async (req, res) => {
  const users = await usersModel.getAll();
  return res.status(200).json(users);
};

const createUser = async (req, res) => {
  const { login, usuario, nome, senha } = req.body;

  const existingUser = await usersModel.findUser(usuario, login);
  if (existingUser) {
    return res.status(400).json({ error: "Usuário ou login já tem cadastro" });
  }

  const user = await usersModel.createUser(login, usuario, nome, senha);
  if (!user) {
    return res.status(500).json({ error: "Erro ao criar usuário" });
  } else {
    return res.status(201).json(user);
  }
};

const login = async (req, res) => {
  const { usuario, senha } = req.body;
  const user = await usersModel.findUser(usuario);
  if (!user) {
    return res.status(401).json({ error: "Usuário ou senha inválidos" });
  }
  const isValidPassword = await bcrypt.compare(senha, user.senha);
  if (!isValidPassword) {
    return res.status(401).json({ error: "Usuário ou senha inválidos" });
  }
  return res.status(201).json(user);
};

module.exports = {
  getAll,
  login,
  createUser,
};

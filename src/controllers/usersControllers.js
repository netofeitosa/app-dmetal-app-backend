const bcrypt = require("bcrypt");
const usersModel = require("../models/usersModel");

const getAll = async (req, res) => {
  const users = await usersModel.getAll();
  if (!users) {
    return res.status(500).json({ error: "Erro ao localizar usuarios" });
  }
  return res.status(200).json(users);
};

const createUser = async (req, res) => {
  const { login, usuario, nome, senha } = req.body;

  const existingUser = await usersModel.findUserUsuario(usuario);
  if (existingUser) {
    return res
      .status(400)
      .json({ error: "Usuario ja tem cadastro no sistema" });
  }

  const existingLogin = await usersModel.findUserLogin(login);
  if (existingLogin) {
    return res.status(400).json({ error: "Login ja tem cadastro no sistema" });
  }

  const user = await usersModel.createUser(login, usuario, nome, senha);
  if (!user) {
    return res.status(500).json({ error: "Erro ao criar usuário" });
  } else {
    return res.status(201).json(user);
  }
};

const deleteUser = async (req, res) => {
  const login = parseInt(req.params.login);

  const existingLogin = await usersModel.findUserLogin(login);
  if (!existingLogin) {
    return res.status(400).json({ error: "Usuario nao existe no sistema" });
  }

  const user = await usersModel.deleteUser(login);
  if (user) {
    return res.status(200).json({ message: "Usuario deletado com sucesso" });
  }
};

const login = async (req, res) => {
  const { user, password } = req.body;
  const result = await usersModel.findUserUsuario(user);
  if (!result) {
    return res.status(401).json({ error: "Usuário ou senha inválidos" });
  }
  const isValidPassword = await bcrypt.compare(password, result.senha);
  if (!isValidPassword) {
    return res.status(401).json({ error: "Usuário ou senha inválidos" });
  }
  return res.status(201).json(result);
};

const validadeToken = async (req, res) => {
  const { authToken, validateToken } = req.body;
  const timeInMs = Date.now();

  const result = await usersModel.findUserToken(authToken);
  if (!result) {
    return res.status(401).json({ error: "Token invalido" });
  }

  if (validateToken < timeInMs) {
    return res.status(401).json({ error: "Token expirado" });
  }

  return res.status(201).json(result);
};

module.exports = {
  getAll,
  login,
  createUser,
  deleteUser,
  validadeToken,
};

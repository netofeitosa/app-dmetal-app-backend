const aprovacoesModel = require("../models/aprovacoesModel");

const getAprovacoes = async (_req, res) => {
  const aprovacoes = await aprovacoesModel.getAprovacoes();
  return res.status(200).json(aprovacoes);
};

module.exports = {
  getAprovacoes,
};

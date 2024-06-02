const aprovacoesModel = require("../models/aprovacoesModel");

const getAprovacoes = async (req, res) => {
  const aprovacoes = await aprovacoesModel.getAprovacoes();
  return res.status(200).json(aprovacoes.recordset);
};

module.exports = {
  getAprovacoes,
};

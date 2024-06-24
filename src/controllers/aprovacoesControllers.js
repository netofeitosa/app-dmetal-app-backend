const aprovacoesModel = require("../models/aprovacoesModel");

const getAprovacoes = async (_req, res) => {
  const aprovacoes = await aprovacoesModel.getAprovacoes();
  return res.status(200).json(aprovacoes);
};

const getDespesas = async (_req, res) => {
  const despesas = await aprovacoesModel.getDespesas();
  return res.status(200).json(despesas);
};

const getDescontos = async (_req, res) => {
  const descontos = await aprovacoesModel.getDescontos();
  return res.status(200).json(descontos);
};

const getCancelamentos = async (_req, res) => {
  const descontos = await aprovacoesModel.getCancelamentos();
  return res.status(200).json(descontos);
};

const getSaidas = async (_req, res) => {
  const saidas = await aprovacoesModel.getSaidas();
  return res.status(200).json(saidas);
};

const postAprovacoes = async (req, res) => {
  const { registro, cod_origem, origem, usuario, autorizado } = req.body;
  const existingAprovacao = await aprovacoesModel.findAprovacoes(
    parseInt(registro),
    parseInt(cod_origem)
  );
  if (existingAprovacao) {
    return res.status(400).json({ error: "Registro já foi autorizado." });
  }

  await aprovacoesModel.postAprovacoes(
    parseInt(registro),
    parseInt(cod_origem),
    origem,
    parseInt(usuario),
    parseInt(autorizado)
  );

  return res.status(200).json({ message: "Registro salvo com sucesso" });
};

module.exports = {
  getAprovacoes,
  getDespesas,
  getDescontos,
  getCancelamentos,
  getSaidas,
  postAprovacoes,
};

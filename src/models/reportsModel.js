const {
  PrismaClient: PrismaClientMSSQL,
} = require("../../prisma/generated/mssql");

const prismaMSSQL = new PrismaClientMSSQL();

const getVendasLojas = async () => {
  return await prismaMSSQL.vW_APP_VENDAS_LOJAS_NEW.findMany();
};

const getVendasCupom = async () => {
  return await prismaMSSQL.vW_APP_VENDAS_CUPONS_NEW.findMany();
};

const getVendasMes = async () => {
  return await prismaMSSQL.vW_APP_VENDAS_MES_NEW.findMany();
};

const getEstoqueLojas = async () => {
  return await prismaMSSQL.vW_APP_ESTOQUE_LOJAS_NEW.findMany();
};

const getControleFaccoes = async () => {
  return await prismaMSSQL.vW_APP_CONTROLE_FACCOES_NEW.findMany();
};

const getSolicitacaoFaturamento = async () => {
  return await prismaMSSQL.vW_APP_REP_SOLICITACAO_FATURAMENTO_NEW.findMany();
};

module.exports = {
  getVendasLojas,
  getVendasCupom,
  getVendasMes,
  getEstoqueLojas,
  getControleFaccoes,
  getSolicitacaoFaturamento,
};

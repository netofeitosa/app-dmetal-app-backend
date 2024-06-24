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

const getRepresentanteDmetalResumo = async () => {
  return await prismaMSSQL.vW_APP_REPRESENTANTES_DMETAL_RESUMO_NEW.findMany();
};

const getRepresentanteChicaResumo = async () => {
  return await prismaMSSQL.vW_APP_REPRESENTANTES_CHICA_RESUMO_NEW.findMany();
};

const getRepresentanteDmetalMapa = async () => {
  return await prismaMSSQL.vW_APP_REPRESENTANTES_DMETAL_MAPA_NEW.findMany();
};

const getRepresentanteChicaMapa = async () => {
  return await prismaMSSQL.vW_APP_REPRESENTANTES_CHICA_MAPA_NEW.findMany();
};

const getRepresentanteDmetalSemana = async () => {
  return await prismaMSSQL.vW_APP_REPRESENTANTES_DMETAL_SEMANA_NEW.findMany();
};

const getRepresentanteChicaSemana = async () => {
  return await prismaMSSQL.vW_APP_REPRESENTANTES_CHICA_SEMANA_NEW.findMany();
};

module.exports = {
  getVendasLojas,
  getVendasCupom,
  getVendasMes,
  getEstoqueLojas,
  getControleFaccoes,
  getSolicitacaoFaturamento,
  getRepresentanteDmetalResumo,
  getRepresentanteChicaResumo,
  getRepresentanteDmetalMapa,
  getRepresentanteChicaMapa,
  getRepresentanteDmetalSemana,
  getRepresentanteChicaSemana,
};

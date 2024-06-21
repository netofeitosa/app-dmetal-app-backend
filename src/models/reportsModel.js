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

module.exports = {
  getVendasLojas,
  getVendasCupom,
  getVendasMes,
};

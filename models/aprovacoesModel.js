const {
  PrismaClient: PrismaClientMSSQL,
} = require("../prisma/generated/mssql");

const prismaMSSQL = new PrismaClientMSSQL();

const getAprovacoes = async () => {
  const aprovacoes = await prismaMSSQL.VW_AUTORIZACOES_WEB_DEV.findMany();
  return aprovacoes;
};

module.exports = {
  getAprovacoes,
};

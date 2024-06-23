const {
  PrismaClient: PrismaClientMSSQL,
} = require("../../prisma/generated/mssql");

const prismaMSSQL = new PrismaClientMSSQL();

const getAprovacoes = async () => {
  return await prismaMSSQL.vW_AUTORIZACOES_WEB_DEV.findMany();
};

const getDespesas = async () => {
  return await prismaMSSQL.vW_AUTORIZACOES_DESPESAS_COFRE_DEV.findMany();
};

const getDescontos = async () => {
  return await prismaMSSQL.vW_AUTORIZACOES_DESCONTOS_LOJAS_DEV.findMany();
};

const getCancelamentos = async () => {
  return await prismaMSSQL.vW_AUTORIZACOES_CANCELAMENTOS_PREVENDAS_DEV.findMany();
};

const getSaidas = async () => {
  return await prismaMSSQL.vW_AUTORIZACOES_SAIDAS_AVULSAS_DEV.findMany();
};

const findAprovacoes = async (registro, cod_origem) => {
  return await prismaMSSQL.aUTORIZACOES_WEB_BARRAMENTOS_DEV.findFirst({
    where: { registro: registro, cod_origem: cod_origem },
  });
};

const postAprovacoes = async (
  registro,
  cod_origem,
  origem,
  usuario,
  autorizado
) => {
  return await prismaMSSQL.aUTORIZACOES_WEB_BARRAMENTOS_DEV.create({
    data: {
      registro: registro,
      cod_origem: cod_origem,
      origem: origem,
      usuario: usuario,
      autorizado: autorizado,
    },
  });
};

module.exports = {
  getAprovacoes,
  getDespesas,
  getDescontos,
  getCancelamentos,
  getSaidas,
  findAprovacoes,
  postAprovacoes,
};

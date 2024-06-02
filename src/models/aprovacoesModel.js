const { sql } = require("./connectionSQL");

const getAprovacoes = async () => {
  try {
    const result = await sql.query`select * from VW_AUTORIZACOES_WEB_DEV`;
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAprovacoes,
};

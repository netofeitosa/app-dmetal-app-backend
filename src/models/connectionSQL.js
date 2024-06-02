const sql = require("mssql");
require("dotenv").config();

const dbConfig = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  server: process.env.SQL_HOST,
  database: process.env.SQL_DB,
  options: {
    encrypt: false,
    enableArithAbort: true,
  },
};

const poolPromise = async () => {
  try {
    await sql.connect(dbConfig);
    //console.log("Conectado ao banco de dados SQL Server");
  } catch (err) {
    console.error("Erro ao conectar ao banco de dados", err);
  }
};

module.exports = {
  sql,
  poolPromise,
};

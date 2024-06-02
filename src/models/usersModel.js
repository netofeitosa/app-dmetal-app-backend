const connectionMySql = require("./connectionMySql");

const getAll = async () => {
  const users = await connectionMySql.execute("SELECT * FROM usuarios");
  return users;
};

module.exports = {
  getAll,
};

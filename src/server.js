const app = require("./app");
const { poolPromise } = require("./models/connectionSQL");
require("dotenv").config();

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  poolPromise();
});

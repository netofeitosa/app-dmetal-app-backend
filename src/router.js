const express = require("express");
const usersControllers = require("./controllers/usersControllers");
const aprovacoesControllers = require("./controllers/aprovacoesControllers");

const router = express.Router();

router.get("/users", usersControllers.getAll);
router.get("/aprovacoes", aprovacoesControllers.getAprovacoes);

module.exports = router;

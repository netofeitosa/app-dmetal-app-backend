const express = require("express");
const usersControllers = require("./controllers/usersControllers");
const aprovacoesController = require("./controllers/aprovacoesControllers");

const router = express.Router();

router.get("/users", usersControllers.getAll);
router.post("/users", usersControllers.createUser);
router.post("/login", usersControllers.login);

router.get("/aprovacoes", aprovacoesController.getAprovacoes);

module.exports = router;

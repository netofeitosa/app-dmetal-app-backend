const express = require("express");
const usersControllers = require("./controllers/usersControllers");
const aprovacoesController = require("./controllers/aprovacoesControllers");

const router = express.Router();

router.get("/", (_req, res) => {
  res.status(200).json({ message: "Server OK" });
});

router.get("/users", usersControllers.getAll);
router.post("/users", usersControllers.createUser);
router.delete("/users/:login", usersControllers.deleteUser);

router.post("/login", usersControllers.login);
router.post("/validatetoken", usersControllers.validadeToken);

router.get("/aprovacoes", aprovacoesController.getAprovacoes);
router.post("/aprovacoes", aprovacoesController.postAprovacoes);
router.get("/despesas", aprovacoesController.getDespesas);
router.get("/descontos", aprovacoesController.getDescontos);
router.get("/cancelamentos", aprovacoesController.getCancelamentos);
router.get("/saidas", aprovacoesController.getSaidas);

module.exports = router;

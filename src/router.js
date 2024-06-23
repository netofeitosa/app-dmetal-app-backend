const express = require("express");
const usersControllers = require("./controllers/usersControllers");
const aprovacoesController = require("./controllers/aprovacoesControllers");
const reportsControllers = require("./controllers/reportsControllers");

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

router.get("/vendaslojas", reportsControllers.getVendasLojas);
router.get("/vendascupons", reportsControllers.getVendasCupom);
router.get("/vendasmes", reportsControllers.getVendasMes);
router.get("/estoquelojas", reportsControllers.getEstoqueLojas);
router.get("/controlefaccoes", reportsControllers.getControleFaccoes);
router.get(
  "/solicitacaofatutamento",
  reportsControllers.getSolicitacaoFaturamento
);

module.exports = router;

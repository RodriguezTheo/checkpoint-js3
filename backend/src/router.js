const express = require("express");

const boatCtrl = require("./controllers/boatCtrl");
const gameCtrl = require("./controllers/gameCtrl");
const tilesCtrl = require("./controllers/tilesCtrl");
const { tileExist } = require("./services/tileExists");

const router = express.Router();

router.get("/tiles", tilesCtrl.getTiles);
router.get("/boats", boatCtrl.getByName);
router.put("/boats/:id", tileExist, boatCtrl.updateCoord);
router.post("/games", gameCtrl.startGame);

module.exports = router;

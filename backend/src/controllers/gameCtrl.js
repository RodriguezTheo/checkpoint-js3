const models = require("../models");

const startGame = (req, res) => {
  models.boat
    .update(1, 1, 1)
    .then(() => {
      return models.tile.updateTreasure();
    })
    .then(() => {
      return models.tile.randomTreasure();
    })
    .then(() => {
      res.status(201).json({ message: "Game started !" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

module.exports = {
  startGame,
};

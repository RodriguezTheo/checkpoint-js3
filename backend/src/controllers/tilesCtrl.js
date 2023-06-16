const models = require("../models");

const getTiles = (req, res) => {
  models.tile
    .findAll()
    .then((tiles) => {
      res.json(tiles[0]);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

module.exports = {
  getTiles,
};

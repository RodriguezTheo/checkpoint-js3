const models = require("../models");

const getByName = (req, res) => {
  models.boat
    .findByName(req.query.name)
    .then((tiles) => {
      res.json(tiles[0]);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

const updateCoord = (req, res) => {
  const { id } = req.params;
  const x = req.body.coord_x;
  const y = req.body.coord_y;

  models.boat
    .update(id, x, y)
    .then(() => {
      res.status(204).json({ update: true });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

module.exports = {
  getByName,
  updateCoord,
};

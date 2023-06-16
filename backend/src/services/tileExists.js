const models = require("../models");

const tileExist = (req, res, next) => {
  const x = req.body.coord_x;
  const y = req.body.coord_y;

  models.tile
    .coordonates(x, y)
    .then(([result]) => {
      const { count } = result[0];
      if (count) {
        next();
      } else {
        res.status(422).json({ error: "Outside map !" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

module.exports = {
  tileExist,
};

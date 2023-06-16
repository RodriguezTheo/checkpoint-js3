const AbstractManager = require("./AbstractManager");

class TileManager extends AbstractManager {
  constructor() {
    super({ table: "tile" });
  }

  coordonates(x, y) {
    return this.connection.query(
      "SELECT COUNT(1) AS count FROM tile WHERE coord_x = ? AND coord_y = ?",
      [x, y]
    );
  }

  updateTreasure() {
    return this.connection.query("UPDATE tile SET has_treasure = 0");
  }

  randomTreasure() {
    this.connection
      .query(
        "SELECT id FROM tile WHERE type = 'island' ORDER BY RAND() LIMIT 1"
      )
      .then(([result]) => {
        const { id } = result[0];
        return this.connection.query(
          "UPDATE tile SET has_treasure = 1 WHERE id = ?",
          [id]
        );
      });
  }
}

module.exports = TileManager;

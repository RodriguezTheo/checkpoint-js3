const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  findByName(name) {
    return this.connection.query(
      `SELECT boat.*, tile.type FROM boat INNER JOIN tile ON boat.coord_x = tile.coord_x AND boat.coord_y = tile.coord_y WHERE name = ?`,
      [name]
    );
  }

  update(id, x, y) {
    return this.connection.query(
      "UPDATE boat SET coord_x = ?, coord_y = ? WHERE id = ?",
      [x, y, id]
    );
  }
}

module.exports = BoatManager;

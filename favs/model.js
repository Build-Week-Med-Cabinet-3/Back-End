const db = require("../data/connection.js");

module.exports = {
  find,
  remove
};

function find() {
  return db("favorites").select(
    "id",
    "strain",
    "type",
    "flavor",
    "description",
    "userId"
  );
}

function remove(id) {
  return db("favorites")
    .where("id", id)
    .del();
}

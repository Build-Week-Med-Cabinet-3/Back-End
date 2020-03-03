const db = require("../data/connection.js");

module.exports = {
  find,
  remove
};

function find() {
  return db("recommendations").select(
    "id",
    "strain",
    "type",
    "flavor",
    "description",
    "userId"
  );
}

function remove(id) {
  return db("recommendations")
    .where("id", id)
    .del();
}

const db = require("../data/connection.js");

module.exports = {
  add,
  addFav,
  delFav,
  find,
  findBy,
  findById,
  findRecs,
  findFavById,
  findFavsByUserId,
  update,
  remove
};

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function addFav(rec) {
  return db("favorites")
    .insert(rec, "id")
    .then(ids => {
      const [id] = ids;
      return findFavById(id);
    });
}

function delFav(id) {
  return db("favorites")
    .where("id", id)
    .del();
}

function find() {
  return db("users").select(
    "id",
    "username",
    "password",
    "email",
    "medicinalUse",
    "tolerance",
    "medicalConditions",
    "desiredEffect"
  );
}

function findBy(filter) {
  return db("users")
    .select(
      "id",
      "username",
      "password",
      "email",
      "medicinalUse",
      "tolerance",
      "medicalConditions",
      "desiredEffect"
    )
    .where(filter);
}

function findById(id) {
  return db("users")
    .select(
      "id",
      "username",
      "password",
      "email",
      "medicinalUse",
      "tolerance",
      "medicalConditions",
      "desiredEffect"
    )
    .where({ id })
    .first();
}

function findRecs(id) {
  return db("recommendations")
    .join("users", "users.id", "recommendations.userId")
    .select(
      "recommendations.id",
      "strain",
      "type",
      "effects",
      "flavor",
      "description",
      "userId",
      "users.username"
    )
    .where("recommendations.userId", id)
    .orderBy("recommendations.id");
}

function findFavById(id) {
  return db("favorites")
    .select("id", "strain", "type", "effects", "flavor", "description", "userId")
    .where({ id })
    .first();
}

function findFavsByUserId(id) {
  return db("favorites")
    .select("id", "strain", "type", "effects", "flavor", "description", "userId")
    .where({ userId: id });
}

function update(id, changes) {
  return db("users")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("users")
    .where("id", id)
    .del();
}

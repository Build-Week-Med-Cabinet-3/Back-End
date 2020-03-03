const router = require("express").Router();
const bcrypt = require("bcryptjs");

// import users model
const Users = require("./model.js");

// set up basic GET end point to retrieve all users
router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      console.log("This is users in GET all users: ", users);
      res.status(200).json(users);
    })
    .catch(error => {
      console.log("This is error in GET all users: ", error);
      res.status(500).json({ error: "Error retrieving users" });
    });
});

// this is to get a specific user
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Users.findById(id)
    .then(userFound => {
      console.log("This is userFound in GET one user: ", userFound);
      res.status(200).json(userFound);
    })
    .catch(error => {
      console.log("This is error in GET one user: ", error);
      res.status(500).json({ error });
    });
});

// this is to update a specific user
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  if (changes.password) {
    const hash = bcrypt.hashSync(changes.password, 8);

    changes.password = hash;
  }

  console.log("This is req.body in router.put: ", req.body);

  Users.update(id, changes)
    .then(count => {
      console.log("This is count in UPDATE user: ", count);
      res.status(200).json(count);
    })
    .catch(error => {
      console.log("This is error in UPDATE user: ", error);
      res.status(500).json({ error: "Error updating user" });
    });
});

// this is for cleaning house after too many users are generated
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Users.remove(id)
    .then(count => {
      console.log("This is count in delete user: ", count);
      res.status(200).json({ message: "This user has been nuked" });
    })
    .catch(error => {
      console.log("This is error in delete user: ", error);
      res.status(500).json({ error: "Error deleting user" });
    });
});

module.exports = router;

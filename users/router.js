const router = require("express").Router();

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

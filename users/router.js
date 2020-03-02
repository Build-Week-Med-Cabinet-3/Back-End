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

module.exports = router;

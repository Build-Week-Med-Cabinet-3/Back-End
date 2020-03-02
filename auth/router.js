const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// import users model
const Users = require("../users/model.js");

// import jwtSecret
const { jwtSecret } = require("../config/secrets.js");

// registration endpoint
router.post("/register", (req, res) => {
  let user = req.body;
  console.log("This is req.body in register: ", req.body);

  const hash = bcrypt.hashSync(user.password, 8);

  user.password = hash;

  Users.add(user)
    .then(savedUser => {
      console.log("This is savedUser in registration: ", savedUser);
      res.status(201).json(savedUser);
    })
    .catch(error => {
      console.log("This is error in registration: ", error);
      res.status(500).json({ error: "Error registering user" });
    });
});

// login endpoint
router.post("/login", (req, res) => {
  let { id, username, password } = req.body;

  console.log("This is req.body: ", req.body)

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          token,
          userID: user.id
        });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    })
    .catch(error => {
      console.log("This is error in login: ", error);
      res.status(500).json({ error: "Error loggin in" });
    });
});

function generateToken(user) {
  const payload = {
    userId: user.id
  };

  const options = {
    expiresIn: "24h"
  };

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;

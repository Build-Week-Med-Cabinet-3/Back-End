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

  const hash = bcrypt.hashSync(user.password, 8);

  user.password = hash;

  Users.add(user)
    .then(savedUser => {
      res.status(201).json(savedUser);
    })
    .catch(error => {
      res.status(500).json({ error: "Error registering user" });
    });
});

// login endpoint
router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        console.log("This is user.password: ", user.password)
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
      res.status(500).json({ error: "Error loggin in" });
    });
});

function generateToken(user) {
  const payload = {
    userId: user.username
  };

  const options = {
    expiresIn: "48h"
  };

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;

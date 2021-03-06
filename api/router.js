const router = require("express").Router();

// import routes
const authRouter = require("../auth/router.js");
const usersRouter = require("../users/router.js");
const recsRouter = require("../recommendations/router.js");
const favsRouter = require("../favs/router.js");

// import middleware
const authenticate = require("../api/authenticate-middleware.js");

// call routers and implement any applicable middleware
router.use("/auth", authRouter);
router.use("/users", authenticate, usersRouter);
router.use("/recs", authenticate, recsRouter);
router.use("/favs", authenticate, favsRouter);

router.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = router;

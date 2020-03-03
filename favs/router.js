const router = require("express").Router();

// import recs model
const Favs = require("./model.js");

// set up basic GET end point to retrieve all recommendations
router.get("/", (req, res) => {
  Favs.find()
    .then(foundFavs => {
      console.log("This is recs in GET all favs: ", foundFavs);
      res.status(200).json(foundFavs);
    })
    .catch(error => {
      console.log("This is error in GET all favss: ", error);
      res.status(500).json({ error: "Error retrieving favorites" });
    });
});

// this endpoint is for deleting a recommendation
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Favs.remove(id)
    .then(count => {
      console.log("This is count in DELETE favorite: ", count);
      res
        .status(200)
        .json({
          message:
            "Favorite has been sent to a different universe never to be seen again"
        });
    })
    .catch(error => {
      console.log("This is error in DELETE rec: ", error);
      res.status(500).json({ error: "Error deleting favorite" });
    });
});

module.exports = router;

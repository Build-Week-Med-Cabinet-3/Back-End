const router = require("express").Router();

// import recs model
const Recs = require("./model.js");

// set up basic GET end point to retrieve all recommendations
router.get("/", (req, res) => {
     Recs.find()
      .then(recs => {
        console.log("This is recs in GET all recs: ", recs);
        res.status(200).json(recs);
      })
      .catch(error => {
        console.log("This is error in GET all recs: ", error);
        res.status(500).json({ error: "Error retrieving recs" });
      });
  });

// this endpoint is for deleting a recommendation
router.delete("/:id", (req, res) => {
    const { id } = req.params;
  
    Recs.remove(id)
      .then(count => {
        console.log("This is count in DELETE rec: ", count);
        res
          .status(200)
          .json({ message: "Recommendation has been sent to another dimension" });
      })
      .catch(error => {
        console.log("This is error in DELETE rec: ", error);
        res.status(500).json({ error: "Error deleting recommendation" });
      });
  });

  module.exports = router;
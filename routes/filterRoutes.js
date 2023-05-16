const express = require("express");
const router = express.Router();

const {
  getOneFilter,
  getAllFilters,
  addOneFilter,
} = require("../controllers/filterController");

router.get("/filters", getAllFilters);
router.get("/filters/:id", getOneFilter);
router.post("/filters", addOneFilter);

module.exports = router;

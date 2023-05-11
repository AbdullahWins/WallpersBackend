// routes/filterRoutes.js
const express = require("express");
const router = express.Router();

const { getAllFilters } = require("../controllers/filterController");

router.get("/filters", getAllFilters);

module.exports = router;

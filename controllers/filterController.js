// controllers/filterController.js

const { filtersCollection } = require("../database/db");

const getAllFilters = async (req, res) => {
  try {
    const query = {};
    const cursor = filtersCollection.find(query);
    const filters = await cursor.toArray();
    res.send(filters);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getAllFilters,
};

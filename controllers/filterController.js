// controllers/filterController.js

const { ObjectId } = require("mongodb");
const { filtersCollection } = require("../database/db");

const getAllFilters = async (req, res) => {
  try {
    const query = {};
    const cursor = filtersCollection.find(query);
    const filters = await cursor.toArray();
    console.log(`Found ${filters.length} filters`);
    res.send(filters);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

//query single filter
const getOneFilter = async (req, res) => {
  console.log("lol");
  try {
    const filterId = req.params.id;
    const filter = await filtersCollection.findOne({ _id: new ObjectId(filterId) });
    if (!filter) {
      res.status(404).send("Filter not found");
    } else {
      res.send(filter);
      console.log(filter);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

//add new filter
const addOneFilter = async (req, res) => {
  console.log(req);
  try {
    const filter = req.body;
    const result = await filtersCollection.insertOne(filter);
    res.send(result);
    console.log(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getOneFilter,
  getAllFilters,
  addOneFilter,
};

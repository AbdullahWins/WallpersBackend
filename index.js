const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const { MongoClient, ObjectId, ServerApiVersion } = require("mongodb");
require("dotenv").config();

// Import controllers
const { getAllFilters } = require("./controllers/filterController");
const { getAllUsers, addOneUser } = require("./controllers/userController");

// Import routes
// const userRoutes = require("./routes/userRoutes");
// const filterRoutes = require("./routes/filterRoutes");

// Routes
// app.use("/users", userRoutes);
// app.use("/filters", filterRoutes);

// Import database connection
const { connect } = require("./db/db");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/users", getAllUsers);
app.post("/users", addOneUser);
app.get("/filters", getAllFilters);


// Start server
async function start() {
  try {
    await connect();
    console.log("Connected to database");

    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

start();

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// Import controllers
const { getAllFilters } = require("./controllers/filterController");

// Import database connection
const { connect } = require("./db/db");

// Import routes
const userRoutes = require("./routes/userRoutes");
const filterRoutes = require("./routes/filterRoutes");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(userRoutes);
app.use(filterRoutes);

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

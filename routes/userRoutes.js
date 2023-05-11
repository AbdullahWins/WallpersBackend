// routes/userRoutes.js
const express = require("express");
const router = express.Router();

const { getAllUsers, addOneUser } = require("../controllers/userController");

router.get("/users", getAllUsers);
router.post("/users", addOneUser);

module.exports = router;

// routes/userRoutes.js

const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  addOneUser,
  getOneUser,
} = require("../controllers/userController");

router.get("/", getAllUsers);
router.post("/", addOneUser);
router.get("/:id", getOneUser);

module.exports = router;

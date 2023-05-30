const express = require("express");
const router = express.Router();

const {
  getALLToDoItems,
  createANewToDoItems,
} = require("../controller/todo_items");
router.route("/").get(getALLToDoItems).post(createANewToDoItems);

module.exports = router;

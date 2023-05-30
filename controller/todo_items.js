const getALLToDoItems = (req, res) => {
  res.send("List of all todo_items");
};

const createANewToDoItems = (req, res) => {
  res.status(200).json(req.body);
};

module.exports = { getALLToDoItems, createANewToDoItems };

const getAllTasks = (req, res) => {
  res.send("Create single task");
};
const createTask = (req, res) => {
  res.send("Create single task");
};
const getTask = (req, res) => {
  res.send("Get single task");
};
const updateTask = (req, res) => {
  res.send("Update task");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };

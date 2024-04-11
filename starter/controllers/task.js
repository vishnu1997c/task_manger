const getAllTasks = (req, res) => {
    res.send("all items all");
}

const createTask = (req, res) => {
    res.send("createTask");
}

const getTask = (req, res) => {
    res.send("get a single task");
}

const updateTask = (req, res) => {
    res.send("updateTask");
}

const deleteTask = (req, res) => {
    res.send("deleteTask");
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}
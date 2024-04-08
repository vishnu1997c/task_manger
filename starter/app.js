const express = require("express");
const app = express();
const tasks = require("./routes/task");

// Routes

app.get("/hello", (req, res) => {
    res.send("task manager app");
});

app.use("/api/v1/tasks", tasks)

const port = 3000;

app.listen(port, console.log(`server is listening in port ${port}`));
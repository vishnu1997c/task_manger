const express = require("express");
const app = express();
const tasks = require("./routes/task");
const connectDB = require("./db/connect");
require("dotenv").config();

// middleware

app.use(express.json())

// Routes

app.get("/hello", (req, res) => {
    res.send("task manager app");
});

app.use("/api/v1/tasks", tasks)

const port = 3001;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server is listening in port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();
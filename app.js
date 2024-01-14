const express = require("express");
const app = express();
const tasks = require("./Routes/tasks");
app.use("/api/v1/tasks",tasks);

app.listen(4000, console.log("app is listening on port 4000"));

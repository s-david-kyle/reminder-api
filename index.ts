import express from "express";
import remindersRouter from "./routers/reminders";

const app = express();
app.listen(8001, () => {
  console.log("Server is running on port 8001");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/reminders", remindersRouter);

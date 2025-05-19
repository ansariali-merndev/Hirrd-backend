import express from "express";
import { configDotenv } from "dotenv";

configDotenv();
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({
    message: "Hello Express App",
  });
});

app.listen(PORT, () => {
  console.log("server is running");
});

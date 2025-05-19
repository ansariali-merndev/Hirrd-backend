import express from "express";
import { configDotenv } from "dotenv";
import { router } from "./router/route.js";
import { connectdb } from "./config/db.js";

configDotenv();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/", router);

connectdb().then(() => {
  app.listen(PORT, () => {
    console.log("server is running");
  });
});

import { json, Router } from "express";

export const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "Yes Its Working well done Ali",
  });
});

router.post("/post-job", (req, res) => {
  console.log(req.body);
  res.json({
    message: "working",
  });
});

import { Router } from "express";
import { PostJob } from "../model/postjob.js";

export const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "Yes Its Working well done Ali",
  });
});

router.post("/post-job", async (req, res) => {
  const {
    recruiterEmail,
    recruiterClerkId,
    title,
    description,
    city,
    company,
  } = req.body;
  await PostJob.create({
    recruiterEmail,
    recruiterClerkId,
    title,
    description,
    city,
    company,
  });
  res.json({
    message: "Posted Successfully",
  });
});

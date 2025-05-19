import { Router } from "express";
import { getHome, postJob } from "../controller/controller.js";

export const router = Router();

router.get("/", getHome);

router.post("/post-job", postJob);

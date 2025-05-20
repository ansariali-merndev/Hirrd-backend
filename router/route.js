import { Router } from "express";
import {
  getAllJob,
  getHome,
  getJobByEmail,
  getJobDetailById,
  postJob,
  updateApplicants,
} from "../controller/controller.js";
import { PostJob } from "../model/postjob.js";

export const router = Router();

router.get("/", getHome);
router.get("/getalljob", getAllJob);
router.post("/update-applicants", updateApplicants);
router.post("/post-job", postJob);
router.post("/get-job", getJobByEmail);
router.post("/getjobid", getJobDetailById);

//----------------------------------------------------------------------------------------//
// router.delete("/delete", async (req, res) => {
//   await PostJob.deleteMany();
//   res.json({
//     message: "Deleted Successfully",
//   });
// });

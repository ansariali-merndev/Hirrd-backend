import { Router } from "express";
import {
  getAllJob,
  getHome,
  getJobByEmail,
  getJobDetailById,
  postJob,
} from "../controller/controller.js";
import { PostJob } from "../model/postjob.js";

export const router = Router();

router.get("/", getHome);
router.get("/getalljob", getAllJob);
router.post("/update-applicants", async (req, res) => {
  try {
    const { id } = req.body;
    await PostJob.updateOne({ _id: id }, { $inc: { applicants: 1 } });
    res.json({
      message: "success",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});
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

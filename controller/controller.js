import { PostJob } from "../model/postjob.js";

export const getHome = (req, res) => {
  res.json({
    message: "Yes Its Working well done Ali",
  });
};

export const postJob = async (req, res) => {
  try {
    const {
      recruiterEmail,
      recruiterClerkId,
      title,
      description,
      city,
      company,
      skills,
    } = req.body;
    await PostJob.create({
      recruiterEmail,
      recruiterClerkId,
      title,
      description,
      city,
      company,
      skills,
    });
    res.json({
      message: "success",
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: error.message,
    });
  }
};

export const getJobByEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const allJob = await PostJob.find({ recruiterEmail: email });
    if (allJob.length === 0) {
      return res.json({
        message: "NotFound",
      });
    }
    res.json({
      message: "success",
      job: allJob,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

export const getAllJob = async (req, res) => {
  const allJob = await PostJob.find();
  res.json({
    message: "success",
    job: allJob,
  });
};

export const getJobDetailById = async (req, res) => {
  const { id } = req.body;
  const userJob = await PostJob.findById(id);
  res.json({
    message: "success",
    job: userJob,
  });
};

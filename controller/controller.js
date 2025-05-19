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

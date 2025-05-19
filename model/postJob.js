import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema({
  recruiterEmail: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  recruiterClerkId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const PostJob = mongoose.model("postjob", jobSchema);

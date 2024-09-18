import mongoose from "mongoose";

export const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date:{
    type: Date,
    default: Date.now()
  }
});

export const postModal = mongoose.models.post || mongoose.model("post", Schema)
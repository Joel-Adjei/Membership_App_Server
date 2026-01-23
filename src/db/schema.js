import mongoose from "mongoose";
import { allDepartments } from "../utils/utils.js";

const adminSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

const memberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    hall: {
      type: String,
    },
    contact: {
      type: String,
      required: true,
    },
    guardian_contact: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    level: {
      type: String,
      required: true,
    },
    programme: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      enum: allDepartments,
    },
    guild: {
      type: String,
    },
    room_number: {
      type: String,
    },
    location: {
      type: String,
    },
    student_status: {
      type: String,
      enum: ["graduate", "undergraduate"],
      required: true,
    },
    church_status: {
      type: String,
      enum: ["member", "associate"],
      required: true,
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
);

export { adminSchema, memberSchema };

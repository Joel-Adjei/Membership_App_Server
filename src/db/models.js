import mongoose from "mongoose";
import { adminSchema } from "./schema.js";

const adminModel = mongoose.model("admin", adminSchema);

export { adminModel };
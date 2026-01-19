import mongoose from "mongoose";
import { adminSchema } from "./schema.js";

const adminModel = mongoose.model("admin", adminSchema);

const createAdminModel = async ()=> {
    try{
    await adminModel.createCollection()
    console.log("Admin collection created successfully");
    } catch(err){
        console.error("Error creating admin collection:", err);
    }
}

export { adminModel , createAdminModel};
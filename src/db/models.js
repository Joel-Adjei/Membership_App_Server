import mongoose from "mongoose";
import { adminSchema, memberSchema } from "./schema.js";

const adminModel = mongoose.model("admin", adminSchema);
const memberModel = mongoose.model("member", memberSchema);

const createAdminModel = async ()=> {
    try{
    await adminModel.createCollection()
    console.log("Admin collection created successfully");
    } catch(err){
        console.error("Error creating admin collection:", err);
    }
}
const createMemberModel = async ()=> {
    try{
    await memberModel.createCollection()
    console.log("Member collection created successfully");
    } catch(err){
        console.error("Error creating member collection:", err);
    }
}

export { adminModel , createAdminModel, memberModel, createMemberModel};
import { Router } from "express";
import { checkSchema, matchedData } from "express-validator";
import {
  addMemberValidation,
  verifyMemberValidation,
} from "../validation/memberValidation.js";
import { checkError } from "../middleware/validationMiddleware.js";
import { memberModel } from "../db/models.js";

const router = Router();

router.get("/all", async (req, res) => {
  try {
    const allMembers = await memberModel.find({});
    return res.status(200).json({ members: allMembers });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
});

router.post(
  "/verify",
  checkSchema(verifyMemberValidation),
  checkError,
  async (req, res) => {
    const { email } = matchedData(req);
    try {
      const member = await memberModel.findOne({ email });
      if (!member) {
        return res.status(404).json({ message: "Member not found" });
      }
      return res.status(200).json({ member });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server error", error: error.message });
    }
  },
);

router.post(
  "/add",
  checkSchema(addMemberValidation),
  checkError,
  async (req, res) => {
    const data = matchedData(req);
    try {
      const newMember = await memberModel.insertOne(data);
      console.log(newMember);
      return res
        .status(201)
        .json({ message: "Member added!", member: newMember });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server error", error: error.message });
    }
  },
);

export default router;

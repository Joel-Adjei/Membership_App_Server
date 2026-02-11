import { Router } from "express";
import { checkSchema, matchedData, validationResult } from "express-validator";
import { loginValidation } from "../validation/authValidation.js";
import bcrypt from "bcryptjs";
import { adminModel } from "../db/models.js";
import passport from "passport";

const router = Router();

router.post(
  "/login",
  checkSchema(loginValidation),
  passport.authenticate("local"),
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    const data = matchedData(req);

    try {
      const admin = await adminModel.findOne({ user_id: data.user_id });
      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }

      const isPasswordValid = await bcrypt.compare(
        data.password,
        admin.password,
      );
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
      }
      return res.status(200).json({ message: "Login successful", admin });
    } catch (error) {
      console.error("Error during login:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
);

router.post("/logout", (req, res) => {
  if (req.user) {
    req.logout((err) => {
      if (err) {
        console.error("Error during logout:", err);
        return res.status(500).json({ message: "Internal server error" });
      }
    });
    return res.send("Logout successful");
  }
  return res.status(401).json({ message: "Unauthorized" });
});

export default router;

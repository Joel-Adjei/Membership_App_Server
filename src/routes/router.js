import { Router } from "express";
import authRoute from "./authRoute.js";
import adminRoute from "./adminRoute.js";
import memberRoute from "./memberRoute.js";
import passport from "passport";

const router = Router();

router.use("/auth", authRoute);
router.use("/admin", adminRoute);
router.use("/member", memberRoute);


export default router;
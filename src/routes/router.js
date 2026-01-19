import { Router } from "express";
import authRoute from "./authRoute.js";
import adminRoute from "./adminRoute.js";

const router = Router();

router.use("/auth", authRoute);
router.use("/admin", adminRoute);


export default router;
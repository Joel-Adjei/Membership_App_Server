import { Router } from "express";
import { adminModel } from "../db/models.js";
import { checkSchema, matchedData, validationResult } from "express-validator";
import { deleteAdmin, registerAdminSchema } from "../validation/adminValidation.js";
import bcrypt, { hash } from "bcryptjs";

const router = Router();

router.get('/all', async (req, res) => {
    try {
        const admins = await adminModel.find({});
        const data = admins.map(admin => ({
            id: admin._id,
            ...admin._doc
        }));
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching admins", error });
    }
});

router.post('/register',checkSchema(registerAdminSchema), async (req, res)=>{
    try {
        const errorResults = validationResult(req);
        if (!errorResults.isEmpty()) {
            return res.status(400).json({ errors: errorResults.array() });
        }
        const { user_id, password } = matchedData(req);
        const hashPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));
        const newAdmin = await adminModel.create({ user_id, password: hashPassword });

        res.status(201).json({ message: "Admin registered successfully", admin: newAdmin });
    } catch (error) {
        res.status(500).json({ message: "Error registering admin", error });
    }
})

router.delete('/delete/:id', checkSchema(deleteAdmin), async (req, res) => {
    try {
        const errorResults = validationResult(req);
        if (!errorResults.isEmpty()) {
            return res.status(400).json({ errors: errorResults.array() });
        }
        const { id } = matchedData(req);
        const deletedAdmin = await adminModel.findByIdAndDelete(id);
        if (!deletedAdmin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        res.status(200).json({ message: "Admin deleted successfully", admin: deletedAdmin });
    } catch (error) {
        res.status(500).json({ message: "Error deleting admin", error });
    }
});

export default router;


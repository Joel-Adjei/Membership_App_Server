import { Router } from "express";
import { checkSchema, matchedData } from "express-validator";
import { addMemberValidation } from "../validation/memberValidation.js";
import { checkError } from "../middleware/validationMiddleware.js";

const router = Router();

router.get('/all', (req, res)=>{
    return res.status(200).json({message: "Member route works!"});
})

router.post('/add',checkSchema(addMemberValidation), checkError, (req, res)=>{
    const data = matchedData(req);
    
    return res.status(201).json({message: "Member added!", member: data});
})

export default router;
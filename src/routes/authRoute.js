import { Router } from "express";
import {checkSchema, matchedData, validationResult} from "express-validator"
import { loginValidation } from "../validation/authValidation.js";

const router = Router();

router.post('/login', checkSchema(loginValidation),(req, res) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({errors: error.array()})
    }
    const data = matchedData(req);

    res.status(200).send({ message: 'Login Successful' , data });
});

export default router;
import { validationResult } from "express-validator";

export const checkError = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array().map(err => ({ msg: err.msg, field: err.path })) });
    }
    next();
}
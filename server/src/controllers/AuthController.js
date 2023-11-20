import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { registerUserService, loginUserService } from "../utils/auth.js";

export const registerUser = async (req, res) => {
    try {
        const result = await registerUserService(req.body)
        res.status(200).json({
            ...result
        });
    } catch (e) {
        res.status(401).json({
            ...e
        })
    }
};
export const loginUser = async (req, res) => {
    try {
        const result = await loginUserService(req.body)
        res.status(200).json({
            ...result
        });
    } catch (e) {
        res.status(401).json({
            ...e
        })
    }
};
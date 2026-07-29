import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";

export const verifyUser = async (req, res, next) => {
    try {

        const token = req.cookies.token;

        if (!token)
            return res.status(401).json({
                message: "Unauthorized",
            });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id);

        if (!user)
            return res.status(401).json({
                message: "User not found",
            });

        req.user = user;

        next();

    } catch (err) {

        return res.status(401).json({
            message: "Invalid Token",
        });

    }
};

export const userVerification = async (req, res) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.json({ status: false });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.json({ status: false });
        }

        return res.json({ status: true, user });
    } catch {
        return res.json({ status: false });
    }
};
import User from "../models/UserModel.js";

export const getProfile = async (req, res) => {
    try {

        const user = req.user;

        res.json({
            success: true,
            user,
        });

    } catch (err) {

        res.status(500).json({
            message: err.message,
        });

    }
};

export const updateProfile = async (req, res) => {

    try {

        const { username, phone, bio } = req.body;

        req.user.username = username;
        req.user.phone = phone;
        req.user.bio = bio;

        await req.user.save();

        res.json({
            success: true,
            user: req.user,
        });

    } catch (err) {

        res.status(500).json({
            message: err.message,
        });

    }

};
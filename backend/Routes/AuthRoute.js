import { Router } from "express";
import { Signup, Login } from "../Controllers/AuthController.js";
import { userVerification } from "../Middlewares/AuthMiddleware.js";

const router = Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/verify", userVerification);

export default router;
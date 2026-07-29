import { Router } from "express";

import {
  getProfile,
  updateProfile,
} from "../Controllers/ProfileController.js";

import { verifyUser } from "../Middlewares/AuthMiddleware.js";

const router = Router();

router.get("/", verifyUser, getProfile);

router.put("/", verifyUser, updateProfile);

export default router;

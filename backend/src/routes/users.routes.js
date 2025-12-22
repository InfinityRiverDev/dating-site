import { Router } from "express";
import {
  getFeed,
  likeUser,
  skipUser,
  getMatches,
  updateProfile,
  uploadPhoto
} from "../controllers/users.controller.js";
import { auth } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", auth, getFeed);
router.post("/:id/like", auth, likeUser);
router.post("/:id/skip", auth, skipUser);
router.get("/matches", auth, getMatches);

router.put("/profile", auth, updateProfile);
router.post("/photo", auth, uploadPhoto);

export default router;

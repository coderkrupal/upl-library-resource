import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import { getUsers } from "../controllers/adminController.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);

export default router;

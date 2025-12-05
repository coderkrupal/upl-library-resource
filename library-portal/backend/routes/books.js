import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import { getBooks, addBook } from "../controllers/booksController.js";

const router = express.Router();

router.get("/", verifyToken, getBooks);
router.post("/", verifyToken, addBook);

export default router;

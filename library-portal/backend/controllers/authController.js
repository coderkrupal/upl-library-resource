import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { db } from "../services/firebaseDB.js";

dotenv.config();

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const users = await db.get("users");

  const found = Object.values(users || {}).find(
    (u) => u.email === email && u.password === password
  );

  if (!found) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { email: found.email, role: found.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token, role: found.role });
};

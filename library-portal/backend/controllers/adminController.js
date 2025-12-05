import { db } from "../services/firebaseDB.js";

export const getUsers = async (req, res) => {
  const users = await db.get("users");
  res.json(users || {});
};

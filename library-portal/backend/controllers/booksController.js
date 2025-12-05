import { db } from "../services/firebaseDB.js";

export const getBooks = async (req, res) => {
  const data = await db.get("books");
  res.json(data || {});
};

export const addBook = async (req, res) => {
  const newBook = await db.push("books", req.body);
  res.json(newBook);
};

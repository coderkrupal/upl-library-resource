import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.js";
import bookRoutes from "./routes/books.js";
import adminRoutes from "./routes/admin.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Required to use __dirname with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// -----------------------------------------
// Serve Frontend
// -----------------------------------------

// Serve frontend static files
app.use(express.static(path.join(__dirname, "../frontend")));

// API routes
app.use("/auth", authRoutes);
app.use("/books", bookRoutes);
app.use("/admin", adminRoutes);

// Fallback route for any other request — loads index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// -----------------------------------------

app.listen(5000, () => console.log("Backend + Frontend running on port 5000"));

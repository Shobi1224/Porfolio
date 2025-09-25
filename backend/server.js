import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

import skillRoutes from "./routes/skillRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import contactRoutes from "./routes/contactRoutes.js"; 
import authRoutes from "./routes/authRoutes.js";
dotenv.config();
const app = express();


app.use(helmet());
app.use(cors());
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URI) 
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

app.get("/", (req, res) => {
  res.send("API is running...");
});


app.use("/api/skills", skillRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

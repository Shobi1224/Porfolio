import express from "express";
import validator from "validator";
import rateLimit from "express-rate-limit";
import Contact from "../models/Contact.js";

const router = express.Router();

// Limit submissions per IP
const postLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10,
  message: { message: "Too many requests, please try later." },
});

router.post("/", postLimiter, async (req, res) => {
  try {
    const { name = "", email = "", message = "", _honeypot = "" } = req.body;

    // Honeypot check
    if (_honeypot) return res.status(400).json({ message: "Spam detected" });

    if (!email || !message)
      return res.status(400).json({ message: "Missing email or message" });

    if (!validator.isEmail(email))
      return res.status(400).json({ message: "Invalid email" });

    // Save to MongoDB
    const contact = new Contact({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      ip: req.ip,
    });

    await contact.save();

    return res
      .status(201)
      .json({ message: "Thanks — your message was saved." });
  } catch (err) {
    console.error("POST /api/contact error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;

import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  message: { type: String, required: true, trim: true, maxlength: 2000 },
  createdAt: { type: Date, default: Date.now },
  ip: { type: String },
});

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    preferences: { type: Map, of: String }, 
    // Example: { theme: "dark", units: "metric", favLocation: "Delhi" }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);


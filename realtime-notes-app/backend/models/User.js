import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" }, // user or admin
  },
  {
    timestamps: true, // auto adds createdAt & updatedAt
  }
);

const User = mongoose.model("User", userSchema);
export default User;

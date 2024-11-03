import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: false },
});

// Use mongoose.models to prevent re-declaration if it already exists
export default mongoose.models.User || mongoose.model("User", UserSchema);

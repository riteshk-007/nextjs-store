import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
});
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;

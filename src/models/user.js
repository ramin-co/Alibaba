const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    country: { type: String, required: true },
    faivorites: { type: [String], default: [] },
    amount: { type: Number, default: 0 },
    isAdmin: { type: Boolean, default: false },
    searched: { type: [String], default: [] },
    followMfr: { type: [String], default: [] },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

module.exports = User;

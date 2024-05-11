const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    country: { type: String, required: true },
    faivorites: { type: String, required: true },
    amount: { type: String, required: true },
    searched: { type: String, required: true },
    followMfr: { type: String, required: true },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

module.exports = User;

const mongoose = require("mongoose");

//in finally you should change types some of items to main refrence.

const manufacturerSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String, required: true },
    catogeries: { type: [String], required: true },
    origin: {
      type: { country: { type: String }, city: { type: String } },
      required: true,
    },
    imgGallery: { type: [String], required: true },
    logo: { type: String, required: true },
    moreDetalis: {
      type: [{ title: { type: String }, value: { type: String } }],
      required: true,
    },
    likes: { type: [String], default: [] },
    disLike: { type: [String] },
    followers: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },
    mainCatogeries: {
      type: [String],
      required: true,
    },
    products: {
      type: [String],
      default: [],
    },
    comments: { type: [String], default: [] },
    isProducer: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const Manufacturer = mongoose.model("Manufacturer", manufacturerSchema);
module.exports = Manufacturer;

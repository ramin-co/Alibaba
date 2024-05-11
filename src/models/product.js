const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String, required: true },
    catogeries: { type: [String], required: true },
    minOrd: { type: Number, required: true, default: 1 },
    companyProducer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Manufacturer",
      required: true,
    },
    origin: {
      type: { country: { type: String }, city: { type: String } },
      required: true,
    },
    imgGallery: { type: [String], required: true },
    moreDetalis: {
      type: [{ key: { title: { type: String }, value: { type: String } } }],
      required: true,
    },
    videos: { type: [String] },
    likes: { type: [String] },
    disLike: { type: [String] },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

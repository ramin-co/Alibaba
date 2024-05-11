const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
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
      type: [{ key: { title: { type: String }, value: { type: String } } }],
      required: true,
    },
    likes: { type: [String] },
    disLike: { type: [String] },
    followers: { type: [mongoose.Schema.Types.ObjectId], ref: "User" },
    mainCatogeries: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Catogery",
      required: true,
    },
    products: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Product",
      default: [],
    },
    comments: { type: [mongoose.Schema.Types.ObjectId], ref: "Comment" },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

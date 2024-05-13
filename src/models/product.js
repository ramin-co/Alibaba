const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String, required: true },
    catogeries: { type: [String], required: true },
    subCatogeries: { type: [String], required: true },
    minOrd: { type: Number, required: true, default: 1 },
    companyProducer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Manufacturer",
      required: true,
    },
    supliers: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Supplier",
      default: [],
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
    videos: { type: [String], default: [] },
    likes: { type: [String], default: [] },
    disLike: { type: [String], default: [] },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

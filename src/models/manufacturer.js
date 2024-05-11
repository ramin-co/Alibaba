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

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

//in finally you should change types some of items to main refrence.

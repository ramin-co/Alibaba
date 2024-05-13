const mongoose = require("mongoose");

const catogerySchema = mongoose.Schema({
  title: { type: String, required: true },
  icon: { type: String, required: true },
  subCatogeries: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "SubCato",
    default: [],
  },
});

const Catogery = mongoose.model("Catogery", catogerySchema);
module.exports = Catogery;

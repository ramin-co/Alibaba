const mongoose = require("mongoose");

const subCatoSchema = mongoose.Schema({
  title: { type: String, required: true },
  icon: { type: String, required: true },
  catogery: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Catogery",
    required: true,
  },
});
const SubCato = mongoose.model("SubCato", subCatoSchema);
module.exports = SubCato;

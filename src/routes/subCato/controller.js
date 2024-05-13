const { json } = require("express");
const Catogery = require("../../models/catogery");
const Comment = require("../../models/comment");
const SubCato = require("../../models/subCatogery");

module.exports = new (class {
  //CREATE NEW CATOGERY
  async newSubCato(req, res) {
    const { title, icon, catogeryId } = req.body;
    try {
      const newSubCato = new SubCato({
        title,
        icon,
        catogery: catogeryId,
      });
      await newSubCato.save();
      const upCAto = await Catogery.findByIdAndUpdate(
        catogeryId,
        { $push: { subCatogeries: newSubCato._id } },
        { new: true }
      );
      console.log(upCAto, "UPCato");
      await upCAto.save();
      res.status(200).json(newSubCato);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  //GET A CATOGERY BY ID
  async getSubCato(req, res) {
    const id = req.params.id;
    console.log(id, "ID");
    try {
      const subcato = await SubCato.findOne({ _id: id });
      return res.status(200).json(subcato);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //GET SOME CATOGERY
  async getSomeCatogery(req, res) {
    const query = req.query;
    let catoes = [];
    let result = [];
    try {
      if (Object.keys(query).length !== 0) {
        catoes = await Catogery.findOne({ _id: id });
      } else {
        catoes = await Catogery.find();
      }
      console.log(catoes,"CAtoes")
      result = await Promise.all(
        catoes.map(async (c) => {
          const subcatoes = SubCato.find({
            catogery: { $in: c.subCatogeries },
          });
          console.log(subcatoes, "subcatoes");
          result.push({ ...c, subCatogery: subcatoes });
        })
      );
      return res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //UPDATE CATOGERY
  async updateCatogery(req, res) {
    const id = req.params.id;
    try {
      const updatedCato = await Catogery.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      await updatedCato.save();
      res.status(200).json(updatedCato);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //DELETE  CATOGERY
  async deleteCatogery(req, res) {
    const id = req.params.id;
    try {
      await Catogery.findByIdAndDelete(id);
      res.status(200).json("Catogery Deleted!");
    } catch (error) {
      res.status(500).json(error);
    }
  }
})();

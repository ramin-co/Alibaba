const Catogery = require("../../models/catogery");
const Comment = require("../../models/comment");
const SubCato = require("../../models/subCatogery");

module.exports = new (class {
  //CREATE NEW CATOGERY
  async newCatogery(req, res) {
    const { title, icon } = req.body;
    try {
      const newCato = new Catogery({
        title,
        icon,
      });
      await newCato.save();
      res.status(200).json(newCato);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //GET A CATOGERY BY ID
  async getCatogery(req, res) {
    const id = req.params.id;
    try {
      const cato = await Catogery.findOne({ _id: id });
      return res.status(200).json(cato);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //GET SOME CATOGERY
  async getSomeCatogery(req, res) {
    const query = req.query;
    let catoes = [];
    try {
      if (Object.keys(query).length !== 0) {
        catoes = await Catogery.find(query);
      } else {
        catoes = await Catogery.find();
      }
      let result = await Promise.all(
        catoes.map(async (c) => {
          const subCatogeries = await SubCato.find({
            _id: { $in: c.subCatogeries },
          });
          return { title: c.title, icon: c.icon, subCatogeries: subCatogeries };
        })
      );
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
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

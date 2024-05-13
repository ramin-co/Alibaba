const Manufacturer = require("../../models/manufacturer");

module.exports = new (class {
  //New Manufacturer
  async newManufacturer(req, res) {
    try {
      console.log(req.body);
      const newManu = await new Manufacturer(req.body);
      await newManu.save();
      res.status(200).json(newManu);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  //GET A MANUFACTURER BY ID
  async getManufacturer(req, res) {
    const id = req.params.id;
    try {
      const manufacturer = await Manufacturer.findOne({ _id: id });
      return res.status(200).json(manufacturer);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //GET A MANUFACTURER BY ID
  async getSomeManufacturer(req, res) {
    const query = req.query;

    try {
      let manufacturers = [];
      if (Object.keys(query).length !== 0) {
        console.log(query, "Query");
        manufacturers =
          query.country &&
          (await Manufacturer.find({
            "origin.country": query.country,
          }));
        manufacturers =
          query.city &&
          (await Manufacturer.find({
            "origin.city": query.city,
          }));
        manufacturers =
          query.city &&
          query.country &&
          (await Manufacturer.find({
            "origin.country": query.country,
            "origin.city": query.city,
          }));
      } else {
        manufacturers = await Manufacturer.find();
      }
      console.log(manufacturers, "Man");
      return res.status(200).json(manufacturers);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //UPDATE COMMENT
  async updateManufacturer(req, res) {
    const id = req.params.id;
    try {
      const manufacturer = await Manufacturer.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      await manufacturer.save();
      res.status(200).json(manufacturer);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //DELETE  COMMENT
  async deletManufacturer(req, res) {
    const id = req.params.id;
    try {
      const manufacturer = await Manufacturer.findByIdAndDelete(id);
      res.status(200).json("Manufacturer Deleted!");
    } catch (error) {
      res.status(500).json(error);
    }
  }
})();

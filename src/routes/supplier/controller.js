const Supplier = require("../../models/supplier");

module.exports = new (class {
  //CREATE NEW SUPPLIER
  async newSupplier(req, res) {
    try {
      const newSupplier = new Supplier({
        ...req.body,
      });
      await newSupplier.save();
      res.status(200).json(newSupplier);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //GET A SUPPLIER BY ID
  async getSupplier(req, res) {
    const id = req.params.id;
    try {
      const newSupplier = await Supplier.findById(id);
      res.status(200).json(newSupplier);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //FIND SOME SUPPLIER BY QUERY OR ALL SUPPLIERS
  async findSupplier(req, res) {
    const query = req.query;
    console.log(query, "query");
    try {
      let suppliers = [];
      if (Object.keys(query).length !== 0) {
        suppliers = await Supplier.find(query);
      } else {
        suppliers = await Supplier.find();
        console.log("supplier is worked!");
      }
      res.status(200).json(suppliers);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //DELETE SUPPLIER
  async deleteSupplier(req, res) {
    const id = req.params.id;
    try {
      await Supplier.findByIdAndDelete(id);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //UPDATE SUPPLIER
  async updateSupplier(req, res) {
    try {
      const updatedSupplier = await Supplier.findByIdAndUpdate(id, {
        $set: req.query,
      });
      res.status(200).json(updatedSupplier);
    } catch (error) {
      res.status(500).json(error);
    }
  }
})();

const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/", controller.newSupplier);
router.get("/find/:id", controller.getSupplier);
router.get("/find", controller.findSupplier);
router.put("/", controller.updateSupplier);
router.delete("/", controller.deleteSupplier);

module.exports = router;

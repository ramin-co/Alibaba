const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/", controller.newCatogery);
router.get("/find/:id", controller.getCatogery);
router.get("/find", controller.getSomeCatogery);
router.delete("/:id", controller.deleteCatogery);
router.put("/:id", controller.updateCatogery);

module.exports = router;

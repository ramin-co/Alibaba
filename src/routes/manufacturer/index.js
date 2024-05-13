const express = require("express");
const router = express.Router();
const controller = require("./controller");

const {
  verifyAdmin,
  verifyUser,
  verifyUserOrAdmin,
} = require("../../verify/verify");

router.post("/", verifyAdmin, controller.newManufacturer);
router.get("/:id", verifyAdmin, controller.getManufacturer);
router.get("/", verifyAdmin, controller.getSomeManufacturer);
router.put("/:id", verifyAdmin, controller.updateManufacturer);
router.delete("/:id", verifyAdmin, controller.deletManufacturer);

module.exports = router;

const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/", controller.newComment);
router.get("/find/:id", controller.getComment);
router.get("/findbysource/:id", controller.getBySource);
router.delete("/:id", controller.deletComment);
router.put("/:id", controller.updateComment);

module.exports = router;

const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const userRouter = require("./user");
const commentRouter = require("./comment/index");
const mnfacturerRouter = require("./manufacturer/index");
const catogeryRouter = require("./catogery/index");
const subCatoRouter = require("./subCato/index");
const supplierRouter = require("./supplier/index");

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/comment", commentRouter);
router.use("/manufacturer", mnfacturerRouter);
router.use("/catogery", catogeryRouter);
router.use("/subCato", subCatoRouter);
router.use("/supplier", supplierRouter);

module.exports = router;

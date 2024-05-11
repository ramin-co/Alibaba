const express = require("express");
const router = express.Router();
const authRouter = require("./auth");
const userRouter = require("./user");
const commentRouter = require("./comment/index");

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/comment", commentRouter);

module.exports = router;

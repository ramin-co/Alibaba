const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = new (class {
  //RIGESTER NEWUSER
  async register(req, res) {
    try {
      const user = await User.findOne({ phone: req.body.phone });
      if (user)
        return res.status(400).json("This Phone Number has beeen Already!");
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);
      console.log(hashedPass, "Hashed password");
      const newUser = new User({
        name: req.body.name,
        username: req.body.username,
        phone: req.body.phone,
        email: req.body.email,
        country: req.body.country,
        password: hashedPass,
      });
      await newUser.save();
      const { password, ...others } = newUser._doc;
      res.status(200).json(others);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //LOGIN
  async login(req, res) {
    try {
      const user = await User.findOne({ phone: req.body.phone });
      if (!user) return res.status(404).json("Username Or Password is Wrong!");
      const result = await bcrypt.compare(req.body.password, user.password);
      if (!result)
        return res.status(401).json("Username Or Password is Wrong!");
      const token = jwt.sign(
        {
          phone: user.phone,
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.SEC_KEY,
        {
          expiresIn: 1000 * 60 * 60 * 24 * 360,
        }
      );
      const { password, ...others } = user._doc;
      res.status(200).cookie("accesToken", token).json(others);
    } catch (error) {
      console.log(error, "Error");
      res.status(500).json(error);
    }
  }
})();

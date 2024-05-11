const Comment = require("../../models/comment");

module.exports = new (class {
  //CREATE NEW COMMENT
  async newComment(req, res) {
    try {
      const newCom = await new Comment(req.body);
      await newCom.save();
      res.status(200).json(newCom);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  //GET A COMMENT BY ID
  async getComment(req, res) {
    const id = req.params.id;
    try {
      const newCom = await Comment.findOne({ _id: id });
      return res.status(200).json(newCom);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //UPDATE COMMENT
  async updateComment(req, res) {
    const id = req.params.id;
    try {
      const comment = await Comment.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      await comment.save();
      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //DELETE  COMMENT
  async deletComment(req, res) {
    const id = req.params.id;
    try {
      const newCom = await Comment.findByIdAndDelete(id);
      res.status(200).json("Comment Deleted!");
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //GET A COMMENT BY SOURCE
  async getBySource(req, res) {
    const id = req.params.id;
    try {
      const newCom = await new Comment(req.body);
      await newCom.save();
      res.status(200).json(newCom);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
})();

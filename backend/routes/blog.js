const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

router.post("/send", (req, res) => {
  Blog.create(req.body)
    .then((blog) => res.json({ msg: "Blog added successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to add blog" }));
});

router.get("/get", (req, res) => {
  Blog.find()
    .then((blogs) => {
      res.status(200).json(blogs);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to fetch blogs" });
    });
});

router.get("/get/:id", (req, res) => {
  const blogId = req.params.id;

  Blog.findById(blogId)
    .then((blog) => {
      if (!blog) {
        return res.status(404).json({ error: "Blog not found" });
      }
      res.status(200).json(blog);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to fetch blog" });
    });
});

router.put("/update/:id", (req, res) => {
  const blogId = req.params.id;
  const updatedBlog = req.body;

  Blog.findByIdAndUpdate(blogId, updatedBlog, {
    new: true,
  })
    .then((updatedBlog) => {
      if (!updatedBlog) {
        return res.status(404).json({ error: "Blog not found" });
      }
      res.status(200).json(updatedBlog);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to update blog" });
    });
});

router.delete("/delete/:id", (req, res) => {
  const blogId = req.params.id;

  Blog.findByIdAndRemove(blogId)
    .then((deletedBlog) => {
      if (!deletedBlog) {
        return res.status(404).json({ error: "Blog not found" });
      }
      res.status(200).json({ message: "Blog deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to delete blog" });
    });
});

module.exports = router;

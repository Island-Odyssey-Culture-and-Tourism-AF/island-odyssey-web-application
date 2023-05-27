import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewAllBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/blog/get");
      setBlogs(res.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h2>All Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <p>Author: {blog.authorName}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewAllBlog;

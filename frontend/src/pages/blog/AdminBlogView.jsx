import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminBlogPage = () => {
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

  const handleDelete = async (blogId) => {
    try {
      await axios.delete(`http://localhost:5000/blog/delete/${blogId}`);
      fetchBlogs();
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
          <Link to={`/update-blog/${blog._id}`}>
            <button>Update</button>
          </Link>
          <button onClick={() => handleDelete(blog._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AdminBlogPage;

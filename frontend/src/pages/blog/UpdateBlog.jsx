import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';





const UpdateBlogPage = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    userId: "",
    textArea: "",
    imageLink: "",
    authorName: "",
  });

  const { userId, textArea, imageLink, authorName } = formData;

  useEffect(() => {
    fetchBlog(id);
  }, [id]);

  const fetchBlog = async (blogId) => {
    try {
      const response = await axios.get(`http://localhost:5000/blog/get/${blogId}`);
      const blog = response.data;
      setFormData({
        userId: blog.userId,
        textArea: blog.textArea,
        imageLink: blog.imageLink,
        authorName: blog.authorName,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/blog/update/${id}`, formData);
       // Display success toast
    } catch (error) {
      console.error(error);
       // Display error toast
    }
  };

  return (
    <div>
      <h2>Update Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            name="textArea"
            value={textArea}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Image Link:</label>
          <input
            type="text"
            name="imageLink"
            value={imageLink}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Author Name:</label>
          <input
            type="text"
            name="authorName"
            value={authorName}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateBlogPage;

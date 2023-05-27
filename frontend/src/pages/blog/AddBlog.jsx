import React, { useState } from "react";
import axios from "axios";

const AddBlogPage = () => {
  const [formData, setFormData] = useState({
    userId: "",
    textArea: "",
    imageLink: "",
    authorName: "",
  });

  const { userId, textArea, imageLink, authorName } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/blog/send", formData);
      alert("Blog added successfully"); // Display success alert

      // Reset the form
      setFormData({
        userId: "",
        textArea: "",
        imageLink: "",
        authorName: "",
      });
    } catch (error) {
      console.error(error.response.data); // Display the error message
      alert("Failed to add blog"); // Display error alert
    }
  };

  return (
    <div>
      <h2>Add Blog</h2>
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

export default AddBlogPage;

import React, { useState } from 'react';
import 'D:/Blog-website/client/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Axios from 'axios';
const PostCreation = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    tags: '',
    category: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here, e.g., send the data to an API
    Axios.post("http://localhost:8000/creatingPost",formData)
    console.log(formData);
    console.log("Data is Submitted...")
  };

  return (
    <div className="container mt-5">
      <h2>Create a Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label><br/>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Enter title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div><br/>
        <div className="form-group">
          <label htmlFor="content">Content:</label><br/>
          <textarea
            className="form-control"
            id="content"
            name="content"
            rows="6"
            placeholder="Enter blog content"
            value={formData.content}
            onChange={handleInputChange}
            required
          ></textarea>
        </div><br/>
        <div className="form-group">
          <label htmlFor="tags">Tags:</label><br/>
          <input
            type="text"
            className="form-control"
            id="tags"
            name="tags"
            placeholder="Enter tags (comma separated)"
            value={formData.tags}
            onChange={handleInputChange}
          />
        </div><br/>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            className="form-control"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            <option value="">Select a category</option>
            <option value="Technology">Technology</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
            {/* Add more categories as needed */}
          </select>
        </div><br/>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostCreation;

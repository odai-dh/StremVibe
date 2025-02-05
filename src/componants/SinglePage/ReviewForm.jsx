import React, { useState } from "react";
import "../../css/singleMoviePage.css";
import { IoMdCloseCircleOutline } from "react-icons/io";

// ReviewForm component to display the review form
export default function ReviewForm({ onSubmit, onClose }) {
  const [newReview, setNewReview] = useState({ author: "", content: "" });

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };
  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(newReview);
    setNewReview({ author: "", content: "" });
    onClose();
  };

  return (
    // Modal overlay to show the review form in a popup window
    <div className="review-form-modal">
      <div className="review-form-container">
        <button className="close-button" onClick={onClose}>
            <IoMdCloseCircleOutline size={30} />
        </button>
        <form className="review-form" onSubmit={handleFormSubmit}>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            placeholder="Your Name"
            value={newReview.author}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="content">Your Review</label>
          <textarea
            name="content"
            placeholder="Write your review here..."
            value={newReview.content}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
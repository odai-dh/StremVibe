import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
// Calculate the number of full, half, and empty stars same as StarSmaller.jsx
export default function StarRating({ rating }) {
  const fullStars = Math.floor(rating / 2);
  const halfStar = rating % 2 >= 1 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="star-rating-container">
    <h3>IMDb</h3>
    <div className="star-rating">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} />
      ))}
      {halfStar === 1 && <FaStarHalfAlt />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} />
      ))}
      <span className="rating-number">{(rating / 2).toFixed(1)}</span>
    </div>
    </div>
  );
}
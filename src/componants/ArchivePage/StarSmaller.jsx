import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Calculate the number of full, half, and empty stars
export default function StarSmaller({ rating, title }) {
  const fullStars = Math.floor(rating / 2);
  const halfStar = rating % 2 >= 1 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="starsSmaller-rating-container">
      {title && <h3>{title}</h3>}

      <div className="star-rating">
        <div>
          {/* Create an array of full stars */}
          {[...Array(fullStars)].map((_, index) => (
            <FaStar key={index} />
          ))}
          {/* Display half star if it exists */}
          {halfStar === 1 && <FaStarHalfAlt />}
          {/* Create an array of empty stars */}
          {[...Array(emptyStars)].map((_, index) => (
            <FaRegStar key={index} />
          ))}
        </div>
        {/* Display the rating number */}
        <p className="rating-number">{(rating / 2).toFixed(1)}</p>
      </div>
    </div>
  );
}

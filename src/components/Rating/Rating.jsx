import { FaStar } from "react-icons/fa";
import "./Rating.scss";

export default function Rating({ rate }) {
  const stars = Math.min(Math.floor(Number(rate) || 0), 5);

  return (
    <div className="rating">
      <div className="starIcons">
        {[...Array(stars)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>
    </div>
  );
}

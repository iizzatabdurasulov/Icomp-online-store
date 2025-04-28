import Rating from "../Rating/Rating";
import "./CommentsItem.scss";

export default function CommentsItem({
  avatar,
  userName,
  rating,
  comment,
  date,
  showRating = true,
}) {
  return (
    <div className="commentItem">
      <div className="commentItemBig">
        <div className="userData">
          <img src={avatar} alt={userName} />
          <div className="userInfo">
            <h3>{userName}</h3>
            <p>{comment}</p>
            <span className="date">{date}</span>
          </div>
        </div>

        {showRating && rating && (
          <div className="ratingSide">
            <h4>{rating}</h4>
            <Rating rate={rating} />
            <p>532 отзыва на Google</p>
          </div>
        )}
      </div>
      <div className="commentsItemSmall">
        <img src={avatar} alt={userName} />
        <h3>{userName}</h3>
        <p>{comment}</p>
        <div className="bottomSec">
          {showRating && <Rating rate={rating} />}
          <span className="date">{date}</span>
        </div>
      </div>
    </div>
  );
}

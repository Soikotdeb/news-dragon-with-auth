import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaBookmark,
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { useState } from "react";
import { useEffect } from "react";
import LikeButton from "./LikedButton/LikeButton";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";

const NewsCard = ({ news }) => {
  const [isShareActive, setIsShareActive] = useState(false);
  const [is_bookmarked, setIsBookmarked] = useState(false);

  const toggleShare = () => {
    setIsShareActive(!isShareActive);
  };
  const toggleBookmark = () => {
    const { _id } = news; // add this line to destructure _id from news
    setIsBookmarked(!is_bookmarked);
    localStorage.setItem(`news_${_id}_bookmark`, !is_bookmarked);
    // Send a request to the server to update the bookmark status of the news in the database
  };
  useEffect(() => {
    const { _id } = news;
    const bookmarkKey = `news_${_id}_bookmark`;
    const savedBookmark = localStorage.getItem(bookmarkKey);
    const initialBookmarkStatus = savedBookmark
      ? JSON.parse(savedBookmark)
      : false;
    setIsBookmarked(initialBookmarkStatus);
  }, [news]);

  const shareViaWhatsapp = () => {
    const shareUrl = `whatsapp://send?text=${encodeURIComponent(
      window.location.href
    )}`;
    window.location.href = shareUrl;
  };

  const {
    _id,
    rating,
    total_view,
    details,
    published_date,
    author,
    title,
    image_url,
  } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div className="ps-2 flex-grow-1">
          <p className="text-secondary fw-bold mb-0 ">{author.name}</p>
          <p className="text-secondary fw-bold">
            <small>{moment(author?.published_date).format("yyy-MM-D")}</small>
          </p>
        </div>
        <div className="text-secondary p-3 d-flex">
          <Link className="me-3" onClick={toggleBookmark}>
            {is_bookmarked ? <FaBookmark /> : <FaRegBookmark />}
          </Link>
          <div className="position-relative">
            <Link>
              <FaShareAlt onClick={toggleShare} />
            </Link>
            {isShareActive && (
              <Link className="position-absolute bg-white p-3 rounded">
                <Link
                  className="fw-bold text-decoration-none"
                  onClick={shareViaWhatsapp}
                >
                  <span className="d-flex  align-items-center">
                    <FaWhatsapp /> WhatsApp
                  </span>
                </Link>
              </Link>
            )}
          </div>
        </div>
      </Card.Header>

      <Card.Body>
        <Card.Title className="text-dark fw-bold">{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text className="text-secondary">
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {" "}
              {details.slice(0, 250)}...
              <Link
                className="fw-bold text-danger text-decoration-none"
                to={`/news/${_id}`}
              >
                Read More
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center text-muted">
        <div className="fw-bold">
          <Rating
            className="text-danger"
            placeholderRating={rating.number}
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar className="text-warning" />}
            fullSymbol={<FaStar />}
          />
          <span className="ms-2  fw-bold ">{rating?.number}</span>
        </div>

        <div className="d-flex align-items-center">
          <FaEye className="me-2" />
          <span>{total_view}</span>
        </div>

        <div>
          <LikeButton />
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;

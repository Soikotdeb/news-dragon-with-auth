import React, { useEffect, useState } from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    const isLiked = localStorage.getItem("liked") === "true";
    const likeCount = parseInt(localStorage.getItem("likeCount")) || 17036;

    setLiked(isLiked);
    setLikeCount(likeCount);
  }, []);

  function handleLikeClick() {
    let newLikeCount = likeCount;
    let newLiked = liked;

    if (liked) {
      newLikeCount -= 1;
      newLiked = false;
    } else {
      newLikeCount += 1;
      newLiked = true;
    }

    setLiked(newLiked);
    setLikeCount(newLikeCount);

    localStorage.setItem("liked", newLiked);
    localStorage.setItem("likeCount", newLikeCount);
  }

  return (
    <div className="d-flex align-items-center">
      <Link onClick={handleLikeClick} className={liked ? "active" : ""}>
        {liked ? <FaThumbsDown /> : <FaThumbsUp />}
      </Link>
      <span className="mx-1">{likeCount}</span>
    </div>
  );
};
export default LikeButton;

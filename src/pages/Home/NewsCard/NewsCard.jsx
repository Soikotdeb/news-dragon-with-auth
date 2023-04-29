import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useState } from "react";
import { useEffect } from "react";

const NewsCard = ({ news }) => {

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

        <div className="text-secondary p-3">
       <span className="me-3"><FaRegBookmark /></span>
          <FaShareAlt />
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
              <Link className="fw-bold text-danger text-decoration-none" to={`/news/${_id}`}>Read More</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1 fw-bold">
            <Rating 
            className="text-danger"
              placeholderRating={rating.number}
            //   readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            
            
            ></Rating>
            <span>{rating?.number}</span>
        </div>
      

        <div>
          <FaEye></FaEye>
          {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;

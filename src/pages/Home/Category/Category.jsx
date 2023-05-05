import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import useTitle from "../../../hooks/useTitle";

const Category = () => {
  useTitle('Home')
  const { id } = useParams();
  const categoryNews = useLoaderData();

  return (
    <div>
      <h2 className="fw-bold text-secondary">Dragon News Home </h2>
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;

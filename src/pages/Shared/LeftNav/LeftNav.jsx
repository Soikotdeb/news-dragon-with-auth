import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './LeftNave.css'
import CategoryDetails from "../../News/category/CategoryDetails";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://the-news-dragon-server-soikotdeb.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
  <div>
  <h4 className="text-secondary fw-bold">All category</h4>
      <h1 className="text-secondary fw-bold align mt-3">National News</h1>
  </div>
      <div className="ps-4">
        {categories.map(category => 
          <p key={category.id}>
            <Link to={`/category/${category.id}`} className="text-decoration-none d-flex type justify-content-start">{category.name}</Link>
          </p>
        )}
      </div>
    <CategoryDetails></CategoryDetails>
    </div>
  );
};

export default LeftNav;

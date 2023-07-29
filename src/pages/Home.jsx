import { useEffect, useState } from "react";
import { categories } from "../api/categories/categories";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap px-4 mt-8">
      {categories.map((category) => (
        <div key={category._id} className="mb-4 p-6 cursor-pointer">
          <img
            src={category.thumbnail}
            alt={category.category}
            onClick={() => navigate(`/category/${category.category}`)}
          />
          <p>{category.category}</p>
        </div>
      ))}
    </div>
  );
};

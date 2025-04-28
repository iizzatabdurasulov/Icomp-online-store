import React, { useState, useContext } from "react";
import { FaScaleBalanced } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import "./SaleProductItem.scss";
import { useNavigate } from "react-router";
import { Context } from "../../hooks/Context";
import Rating from "../Rating/Rating";

export default function SaleProductItem({ product }) {
  const navigate = useNavigate();
  const goToDetails = () => {
    navigate(`/product/${product.id}`);
  };

  const { addToComparison, addToFavorites } = useContext(Context);
  const [isInComparison, setIsInComparison] = useState(false);
  const [isInFavorites, setIsInFavorites] = useState(false);

  const handleComparison = () => {
    setIsInComparison(!isInComparison);
    addToComparison(product);
  };

  const handleFavorites = () => {
    setIsInFavorites(!isInFavorites);
    addToFavorites(product);
  };

  return (
    <div className="productItem">
      <div className="topIcons">
        <button
          className={isInComparison ? "activeComparison" : ""}
          onClick={handleComparison}
        >
          <FaScaleBalanced />
        </button>
        <button
          className={isInFavorites ? "activeFavorites" : ""}
          onClick={handleFavorites}
        >
          <FaHeart />
        </button>
      </div>
      <img
        onClick={goToDetails}
        src={product.img}
        alt={product.title}
        className="product-img"
      />
      <h5 className="productTitle">{product.productName}</h5>
      <Rating rate={product.grade} />
      <div className="buy">
        <p className="productPrice">
          <span className="oldPrice">{product.oldPrice} грн</span>
          {product.price} <span>грн.</span>
        </p>
        <button onClick={goToDetails} className="buyBtn">
          Купить
        </button>
      </div>
    </div>
  );
}

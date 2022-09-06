import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { GetAddContext } from "../AddContext";

const Product = ({ data }) => {

  const [isFavorite, setIsFavorite] = useState(window.localStorage.getItem('favorite') ? JSON.parse(window.localStorage.getItem('favorite'))[data.webID] : false);

  const {handleAddBag, handleAddFavorite, handleRemoveFavorite} = GetAddContext();

  return (
    <>
      <div className="w-200px xl:w-[260px]">
        <div className="h-[275px] md:h-[325px] xl:h-[350px] w-200px xl:w-[260px] border-2 border-black">
          <Link to={`/product/${data.webID}`}>
            <img
              src={`${data.image.url}`}
              alt={data.productTitle}
              className="w-full h-full object-cover object-center cursor-pointer"
            />
          </Link>
        </div>

        <div className="flex justify-between">
          <div className=" py-2 bg-white">
            <i
              onClick={() => {
                handleAddBag(data);
              }}
              className="fa-solid fa-cart-shopping cursor-pointer"
            ></i>
          </div>

          <div className=" py-2 bg-white">
            {isFavorite && (
              <i
                onClick={() => {
                  handleRemoveFavorite(data);
                  setIsFavorite(false);
                }}
                className="fa-solid fa-heart cursor-pointer"
              ></i>
            )}
            {!isFavorite && (
              <i
                onClick={() => {
                  handleAddFavorite(data);
                  setIsFavorite(true)
                }}
                className="fa-regular fa-heart cursor-pointer"
              ></i>
            )}
          </div>
        </div>

        <h1 className="text-[12px] text-slate-500 overflow-hidden max-h-4">{data.productTitle}</h1>
        <h1 className="font-bold text-slate-700 mb-6">{data.prices[0].regularPrice.minPrice} $</h1>
      </div>
    </>
  );
};

export default Product;

import React from "react";
import { useNavigate } from "react-router-dom";

const ProductSimilar = ({ data }) => {
  // data : data of product similar

  const navigate = useNavigate();

  return (
    <div>
      <div className="w-[30vw] max-w-[145px] md:max-w-[175px] h-[215px]">
        <img
          onClick={() => {
            navigate(`/product/${data?.product?.id}`);
          }}
          className="w-full h-full object-cover object-center cursor-pointer"
          src={`http://${data?.product?.images[0].url}`}
          alt={data?.product?.name}
        />
      </div>

      <h1 className="text-md font-bold my-2">{data?.product?.price?.current?.text}</h1>
      <h1 className="text-md mb-4">{data?.product?.brandName}</h1>
    </div>
  );
};

export default ProductSimilar;

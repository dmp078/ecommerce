import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { GetAPI } from "../APIContext";
import { GetAddContext } from "../AddContext";
import Footer from '../components/Footer';

const DetailProduct = () => {
  const { id } = useParams();
  const [imgPicked, setImgPicked] = useState(0);
  const [number, setNumber] = useState(1);
  const { detail, qnaProduct, getDetailProduct, getQnaProduct } = GetAPI();
  const {handleAddBag, handleCalcCost} = GetAddContext();

  useEffect(() => {
    getDetailProduct(id);
    getQnaProduct(id);
  }, [id]);

  return (
    <div>
      <div className="mt-24">
        <h1 className="text-md mx-auto w-fit md:hidden font-bold mb-4">
          {detail?.payload?.products[0]?.productTitle}
        </h1>

        <div className="w-[1000px] max-w-[90%] h-[1px] bg-black mx-auto mb-12" />

        <div className="flex flex-col md:justify-between md:flex-row max-w-[85%] mx-auto">
          <img
            className="w-full md:hidden"
            src={`${detail?.payload?.products[0]?.altImages[0].url}`}
            alt=""
          />

          <div className="hidden md:flex flex-col my-auto h-fit">
            <img
              onClick={() => setImgPicked(0)}
              src={`${detail?.payload?.products[0]?.altImages[0].url}`}
              className="w-full h-[60px] object-fit object-center my-4"
              alt=""
            />

            {detail?.payload?.products[0]?.altImages[1] && <img
              onClick={() => setImgPicked(1)}
              src={`${detail?.payload?.products[0]?.altImages[1].url}`}
              className="w-full h-[60px] object-fit object-center my-4"
              alt=""
            />}

            {detail?.payload?.products[0]?.altImages[2] && <img
              onClick={() => setImgPicked(2)}
              src={`${detail?.payload?.products[0]?.altImages[2].url}`}
              className="w-full h-[60px] object-fit object-center my-4"
              alt=""
            />}

            {detail?.payload?.products[0]?.altImages[3] && <img
              onClick={() => setImgPicked(3)}
              src={`${detail?.payload?.products[0]?.altImages[3].url}`}
              className="w-full h-[60px] object-fit object-center my-4"
              alt=""
            />}
          </div>
          <div className="w-full  mx-4">
            <img
              className="h-full mx-auto object-cover object-center hidden md:block"
              src={`${detail?.payload?.products[0]?.altImages[imgPicked].url}`}
              alt=""
            />
          </div>

          <div className="px-4">
            <h1 className="text-md mt-6 mb-8 font-bold hidden md:block">
              {detail?.payload?.products[0]?.productTitle}
            </h1>
            <h1 className="text-lg mb-6 font-bold text-slate-600">
              {detail?.payload?.products[0]?.price?.regularPrice?.minPrice} $
            </h1>

            <div className="w-full flex bg-[#cde2f5] py-4">
              <i className="fa-solid fa-tag px-4 mt-6"></i>
              <div className="w-full text-lg">
                <h1>NEW HERE?</h1>
                <h1>Get 20% off everything!*</h1>
                <h1>With code: NEWBIE</h1>
              </div>
            </div>

              <div className="mt-6 grid grid-cols-3 font-bold w-fit mx-auto">
                <button onClick={() => setNumber(e => (e - 1 ? e - 1 : 1))} className="w-6 h-6 bg-slate-600 text-white mr-2">-</button>
                <h1 className="w-fit mx-auto text-center">{number}</h1>
                <button onClick={() => setNumber(prev => prev + 1)} className="w-6 h-6 bg-slate-600 text-white ml-2">+</button>
              </div>

              <div onClick={() => {
                handleAddBag(detail?.payload?.products[0], number);
                handleCalcCost();
              }} className="w-[80%] cursor-pointer mt-4 mb-8 hover:bg-green-800 mx-auto py-2 bg-[#018849] text-center text-white font-bold">
                ADD TO BAG
              </div>

            <div className="border-2 border-slate-300 py-4 px-4">
              <div className="flex flex-row">
                <div className="pr-4">
                  <i className="fa-solid fa-truck-fast my-auto min-w-8" />

                  <i className="fa-regular fa-arrow-rotate-left my-auto min-w-8"></i>
                </div>

                <div className="w-full">
                  <h1 className="text-sm">Free Delivery.</h1>
                  <h1 className="text-sm">Free Returns.</h1>

                  <h1 className="text-sm">Ts&Cs apply. Learn more</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="w-fit mx-auto text-md px-4 mt-4">
          Description: {detail?.payload?.products[0].description.shortDescription}
        </h1>

        <div className="w-[1000px] max-w-[90%] h-[1px] bg-black mx-auto my-12" />
      </div>
      <div className="w-fit mx-auto px-4">
        <h1 className="text-red-500 font-bold text-2xl">Comment:</h1>
        {qnaProduct?.payload?.TotalResults > 0 &&
          qnaProduct?.payload?.Results.map((obj, id) => (
            <div className="my-4" key={id}>
              <h1 className="text-xl font-bold">{obj.UserNickname}</h1>
              <h1 className="text-md">{obj.QuestionSummary}</h1>
              <h1 className="text-[10px]">{obj.SubmissionTime}</h1>
            </div>
          ))}
      </div>
      <Footer /> 
      <Navbar />
    </div>
  );
};

export default DetailProduct;

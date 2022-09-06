import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetAPI } from "../APIContext";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

const ViewSearch = () => {
  const { query } = useParams();
  const { searchResults, search } = GetAPI();

  useEffect(() => {
    search(query);
  }, [query]);

  return (
    <div>
      <div className="bg-[#f8f8f8] mt-12 text-center py-4 font-black text-lg md:text-3xl border-2 border-slate-200">
        {`Search for: ${query}`}
      </div>

      <div className="bg-[#eeeeee] py-2 flex md:hidden">
        <div className="flex mx-auto font-bold text-slate-600">
          <h1>SORT</h1>
          <i className="fa-solid fa-chevron-right my-auto ml-2 rotate-90"></i>
        </div>

        <div className="w-[1px] h-6 my-auto bg-slate-300"></div>

        <div className="flex mx-auto font-bold text-slate-600">
          <h1>FILTER</h1>
        </div>
      </div>

      <div className="hidden md:grid py-2 grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 bg-[#eeeeee] px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full h-11 border-t-2 border-b-2 border-slate-300 flex justify-between px-2">
          <h1 className="text-slate-600 my-auto">Sort</h1>
          <i className="fa-solid fa-chevron-right my-auto ml-2 rotate-90"></i>
        </div>

        <div className="w-full h-11 border-t-2 border-b-2 border-slate-300 flex justify-between px-2">
          <h1 className="text-slate-600 my-auto">Category</h1>
          <i className="fa-solid fa-chevron-right my-auto ml-2 rotate-90"></i>
        </div>

        <div className="w-full h-11 border-t-2 border-b-2 border-slate-300 flex justify-between px-2">
          <h1 className="text-slate-600 my-auto">Product Type</h1>
          <i className="fa-solid fa-chevron-right my-auto ml-2 rotate-90"></i>
        </div>

        <div className="w-full h-11 border-t-2 border-b-2 border-slate-300 flex justify-between px-2">
          <h1 className="text-slate-600 my-auto">Style</h1>
          <i className="fa-solid fa-chevron-right my-auto ml-2 rotate-90"></i>
        </div>

        <div className="w-full h-11 border-t-2 border-b-2 border-slate-300 flex justify-between px-2">
          <h1 className="text-slate-600 my-auto">Color</h1>
          <i className="fa-solid fa-chevron-right my-auto ml-2 rotate-90"></i>
        </div>

        <div className="w-full h-11 border-t-2 border-b-2 border-slate-300 flex justify-between px-2">
          <h1 className="text-slate-600 my-auto">Body Fit</h1>
          <i className="fa-solid fa-chevron-right my-auto ml-2 rotate-90"></i>
        </div>

        <div className="w-full h-11 border-t-2 border-b-2 border-slate-300 flex justify-between px-2">
          <h1 className=" text-slate-600 my-auto">Size</h1>
          <i className="fa-solid fa-chevron-right my-auto ml-2 rotate-90"></i>
        </div>

        <div className="w-full h-11 border-t-2 border-b-2 border-slate-300 flex justify-between px-2">
          <h1 className="text-slate-600 my-auto">Price Range</h1>
          <i className="fa-solid fa-chevron-right my-auto ml-2 rotate-90"></i>
        </div>
      </div>

      <h1 className="mx-auto w-fit text-sm text-slate-500 my-4">{`${searchResults.count} styles found`}</h1>

      {searchResults.count > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6 xl:gap-8 w-fit mx-auto px-8">
          {searchResults?.payload?.products?.map((obj, id) => (
            <Product key={id} data={obj} />
          ))}
        </div>
      )}
      <Navbar />
    </div>
  );
};

export default ViewSearch;

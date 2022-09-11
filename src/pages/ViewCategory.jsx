import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import { GetAPI } from "../APIContext";
import { useEffect } from "react";
import { GetAddContext } from "../AddContext";
import Footer from '../components/Footer';

const ViewCategory = () => {
  const { id } = useParams();
  const { listCate, search, searchResults } = GetAPI();
  const {numberFavorite} = GetAddContext();

  useEffect(() => {
      search(listCate[id]?.categories[0].name);
  }, [listCate[id]?.categories[0].name], id);


  return (
    <div>
      <div className="bg-[#f8f8f8] mt-12 text-center py-4 font-black text-3xl border-2 border-slate-200">
        {listCate[id]?.categories[0].name}
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

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 w-fit mx-auto">
        <div className="hidden md:grid col-span-1 grid-cols-1 w-fit mx-auto h-fit">
          <div className="text-center mt-10 font-black text-3xl">Categories</div>
          <div className="bg-black w-[80%] h-[1px] mx-auto mb-6 mt-2"></div>
          {listCate.map((obj, id) => (
            <Link to={`/category/${id}`} key={id}>
              <div className="text-center w-full hover:font-black max-w-[200px] py-4 border-t-2 border-b-2 hover:border-slate-500">
                {obj.categories[0].name}
              </div>
            </Link>
          ))}
        </div>

        <div className="grid col-span-2 lg:col-span-3 2xl:col-span-4 w-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 px-4 mx-auto gap-4 lg:gap-x-8">
          {searchResults?.payload?.products?.map((obj, id) => (
            <Product key={id} data={obj} isFavorite={window.localStorage.getItem('favorite') ? JSON.parse(window.localStorage.getItem('favorite'))[obj.webID] : false} />
          ))}
        </div>
      </div>

      <Footer />
      <Navbar />
    </div>
  );
};

export default ViewCategory;

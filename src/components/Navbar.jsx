import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetAddContext } from "../AddContext";
import {GetAPI} from '../APIContext'
import ThumnailView from "./ThumnailView";

const Navbar = () => {
  const [querySearch, setQuerySearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const refFavorite = useRef(null);
  const refBag = useRef(null);


  const { listCate } = GetAPI();
  const navigate = useNavigate();

  const {numberBag, numberFavorite} = GetAddContext();

  const handleSubmitSearch = () => {
    navigate(`/view-search/${querySearch}`);
    setIsSearch(false);
  };

  const HandleOutside = (ref) => {
    useEffect(() => {
      const Handler = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          ref.current.style.display = 'none';
        }
      }

      window.addEventListener('mousedown', Handler);

      return () => {
        window.removeEventListener('mousedown', Handler);
      }
    }, [])
  }

  HandleOutside(refFavorite);
  HandleOutside(refBag);

  return (
    <>
      <div className="bg-[#2d2d2d] w-full h-12 flex px-4 md:px-8 lg:px-12 xl:px-16 justify-between fixed top-0">
        {/* Left */}
        <div className="flex">
          <i
            onClick={() => setIsMenu(true)}
            className="md:hidden cursor-pointer fa-solid fa-bars text-white my-auto text-2xl"
          ></i>

          {isMenu && (
            <div className="bg-[#eee] w-[100vw] h-screen -translate-x-10 relative  md:hidden">
              <i
                onClick={() => setIsMenu(false)}
                className="cursor-pointer fa-solid fa-window-close text-black text-2xl fixed top-4 right-4"
              />

              <div className="text-center mt-10 font-black text-3xl">Categories</div>
              <div className="w-[80%] h-[1px] bg-black mx-auto mt-4 mb-6" />

              <div className="grid grid-cols-2 gap-2 w-fit mx-auto">
                {listCate.map((obj, id) => (
                  <Link to={`/category/${id}`}>
                    <div
                      key={id}
                      className="text-center w-full hover:font-black max-w-[240px] py-4 border-t-2 border-b-2 hover:border-slate-500"
                    >
                      {obj.categories[0].name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <Link to="/category/0" className="text-white my-auto text-3xl font-bold ml-4">
            SHOP
          </Link>
        </div>

        {/* Right */}
        <div className="flex w-full flex-row-reverse">
          <div className="flex">
            <i
              onClick={() => setIsSearch(true)}
              className="md:hidden fa-solid fa-magnifying-glass text-white text-2xl my-auto mr-3"
            />

            <div className="my-auto mx-3 relative">
              <i onClick = {() => {refFavorite.current.style.display = 'block'}} className="fa-regular fa-heart text-white text-2xl cursor-pointer" />
              <div onClick = {() => {refFavorite.current.style.display = 'block'}} className="w-6 h-6 cursor-pointer text-sm font-bold absolute top-0 left-3 rounded-full bg-slate-700 text-center text-white">
                {numberFavorite}
              </div>
              
              <div ref={refFavorite} className="absolute right-[-12px] hidden">
                <ThumnailView type={'favorite'} data={window.localStorage.getItem('favorite') ? JSON.parse(window.localStorage.getItem('favorite')) : {}} />
              </div>
            </div>

            <div className="my-auto mx-3 relative">
              <i onClick = {() => {refBag.current.style.display = 'block'}} className="fa-sharp fa-solid fa-bag-shopping text-white text-2xl cursor-pointer" />
              <div onClick = {() => {refBag.current.style.display = 'block'}} className="w-6 h-6 cursor-pointer font-bold text-sm absolute top-0 left-3 rounded-full bg-slate-700 text-center text-white">
                {numberBag}
              </div>

              <div ref={refBag} className="absolute right-[-12px] hidden">
                <ThumnailView type={'bag'} data={window.localStorage.getItem('bag') ? JSON.parse(window.localStorage.getItem('bag')) : {}} />
              </div>
            </div>

          </div>

          <div className="mx-auto hidden md:block">
            <form onSubmit={handleSubmitSearch} className="flex w-[50vw] my-2 mx-auto">
              <input
                onClick={() => setIsSearch(true)}
                onChange={(e) => setQuerySearch(e.target.value)}
                type="text"
                placeholder="Search for items and brands"
                className="w-full rounded-3xl text-black px-4"
              />
              <i
                onClick={handleSubmitSearch}
                className="fa-solid fa-magnifying-glass cursor-pointer text-white text-2xl my-auto ml-2"
              />
            </form>

            {/* overlaySearch--md */}
            {isSearch && (
              <div
                onClick={() => setIsSearch(false)}
                className={`bg-[color:var(--overlay)] w-screen h-screen absolute left-0 top-12`}
              ></div>
            )}
          </div>
        </div>
      </div>

      {/* overlaySearch */}
      {isSearch && (
        <div className="bg-[#eee] w-full h-full fixed inset-0 md:hidden">
          <i
            onClick={() => setIsSearch(false)}
            className="fa-solid fa-window-close text-black text-2xl fixed right-4 cursor-pointer"
          />

          <form onSubmit={handleSubmitSearch} className="w-[90%] h-10 mt-12 flex mx-auto">
            <input
              onChange={(e) => setQuerySearch(e.target.value)}
              type="text"
              placeholder="Search for items and brands"
              className="w-full rounded-3xl text-black px-4"
            />
            <i
              onClick={handleSubmitSearch}
              className="fa-solid fa-magnifying-glass cursor-pointer text-black text-2xl my-auto ml-2"
            />
          </form>
        </div>
      )}
    </>
  );
};

export default Navbar;

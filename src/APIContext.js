import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";

const APIContext = createContext();

export function APIProvider({ child }) {
  const [listCate, setListCate] = useState([]);
  const [searchResults, setSearchResults] = useState({});
  const [detail, setDetail] = useState({});
  const [qnaProduct, setQnaProduct] = useState({});

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "969555acb7msha8f2c4ec3e22775p1c0db1jsn456c6e48605c",
        "X-RapidAPI-Host": "kohls.p.rapidapi.com",
      },
    };

    fetch("https://kohls.p.rapidapi.com/categories/list", options)
      .then((response) => response.json())
      .then((response) => setListCate(response.payload.categories))
      .catch((err) => console.error(err));
  }, []);

  const search = (query) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "969555acb7msha8f2c4ec3e22775p1c0db1jsn456c6e48605c",
        "X-RapidAPI-Host": "kohls.p.rapidapi.com",
      },
    };

    fetch(
      `https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&keyword=${encodeURI(
        query
      )}&dimensionValueID=AgeAppropriate%3ATeens`,
      options
    )
      .then((response) => response.json())
      .then((response) => setSearchResults(response))
      .catch((err) => console.error(err));
  };

  const getDetailProduct = (id) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "969555acb7msha8f2c4ec3e22775p1c0db1jsn456c6e48605c",
        "X-RapidAPI-Host": "kohls.p.rapidapi.com",
      },
    };

    fetch(`https://kohls.p.rapidapi.com/products/detail?webID=${id}`, options)
      .then((response) => response.json())
      .then((response) => setDetail(response))
      .catch((err) => console.error(err));
  };

  const getQnaProduct = (id) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "969555acb7msha8f2c4ec3e22775p1c0db1jsn456c6e48605c",
        "X-RapidAPI-Host": "kohls.p.rapidapi.com",
      },
    };

    fetch(
      `https://kohls.p.rapidapi.com/qnas/list?ProductId=${id}&Limit=10&Offset=0&Sort=SubmissionTime%3Adesc`,
      options
    )
      .then((response) => response.json())
      .then((response) => setQnaProduct(response))
      .catch((err) => console.error(err));
  };

  return (
    <APIContext.Provider
      value={{
        listCate,
        search,
        getDetailProduct,
        getQnaProduct,
        searchResults,
        detail,
        qnaProduct,
      }}
    >
      {child}
    </APIContext.Provider>
  );
}

export function GetAPI() {
  return useContext(APIContext);
}
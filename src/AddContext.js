import React, { createContext, useCallback, useEffect, useState } from "react";
import { useContext } from "react";

const AddContext = createContext()

export const AddProvider = ({ children }) => {

  const [numberBag, setNumberBag] = useState(window.localStorage.getItem('bag') ? Object.keys(JSON.parse(window.localStorage.getItem('bag'))).length : 0)
  const [numberFavorite, setNumberFavorite] = useState(window.localStorage.getItem('favorite') ? Object.keys(JSON.parse(window.localStorage.getItem('favorite'))).length : 0)
  const [cost, setCost] = useState(0);

  const handleCalcCost = () => {
    if (!window.localStorage.getItem('bag')) return;

    let res = 0;
    const temp = JSON.parse(window.localStorage.getItem('bag'));
    for (var e in temp) {
      res += temp[e].price * temp[e].count;
    }

    setCost(res);
  }

  useEffect(() => {
    handleCalcCost();
  }, [])

  const handleAddBag = (data, number) => {
    if (!data) return;
    let exist = false;
    if (window.localStorage.getItem('bag')) {
      exist = JSON.parse(window.localStorage.getItem('bag'))[data.webID] ? true : false;
    }

    if (exist) {
      handleRemoveBag(data);
    }

    let obj = JSON.parse(window.localStorage.getItem('bag'));
    if (data?.images) {
      obj = { ...obj, [data?.webID]: {webID: data?.webID, count: number, img: data?.images[0]?.url , title: data?.productTitle, price: data?.price?.regularPrice?.minPrice} };
    } 
    if (data?.image) {
      obj = { ...obj, [data?.webID]: {webID: data?.webID, count: number, img: data?.image?.url, title: data?.productTitle, price: data?.prices[0]?.regularPrice?.minPrice } };
    }
    if (data?.img) {
      obj = { ...obj, [data?.webID]: {webID: data?.webID, count: number, img: data?.img, title: data?.title, price: data?.price } };
    }

    window.localStorage.setItem('bag', JSON.stringify(obj));
    setNumberBag(prev => prev + 1)
  }

  const handleRemoveBag = (data) => {
    let obj = JSON.parse(window.localStorage.getItem('bag'));
    delete (obj)[data.webID]

    window.localStorage.setItem('bag', JSON.stringify(obj));
    setNumberBag(prev => prev - 1)
  }

  const handleAddFavorite = (data) => {
    let obj = window.localStorage.getItem('favorite') ? JSON.parse(window.localStorage.getItem('favorite')) : {}
    obj = { ...obj, [data.webID]: {webID: data.webID, img: data.image.url, title: data.productTitle, price: data.prices[0].regularPrice.minPrice } };

    window.localStorage.setItem('favorite', JSON.stringify(obj));
    setNumberFavorite(prev => prev + 1)
  }

  const handleRemoveFavorite = (data) => {
    let obj = JSON.parse(window.localStorage.getItem('favorite'));
    delete (obj)[data.webID]

    window.localStorage.setItem('favorite', JSON.stringify(obj));
    setNumberFavorite(prev => prev - 1)
  }

  return (
    <AddContext.Provider value={{
      numberBag,
      numberFavorite,
      handleAddBag,
      handleRemoveBag,
      handleAddFavorite,
      handleRemoveFavorite,
      handleCalcCost,
      cost
    }} >
      {children}
    </AddContext.Provider>
  )
}

export const GetAddContext = () => {
  return useContext(AddContext)
}
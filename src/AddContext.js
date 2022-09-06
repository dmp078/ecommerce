import React, { createContext, useState } from "react";
import { useContext } from "react";

const AddContext = createContext()

export const AddProvider = ({ children }) => {

  const [numberBag, setNumberBag] = useState(window.localStorage.getItem('bag') ? Object.keys(JSON.parse(window.localStorage.getItem('bag'))).length : 0)
  const [numberFavorite, setNumberFavorite] = useState(window.localStorage.getItem('favorite') ? Object.keys(JSON.parse(window.localStorage.getItem('favorite'))).length : 0)

  const handleAddBag = (data) => {
    let exist = false;
    if (window.localStorage.getItem('bag')) {
      exist = JSON.parse(window.localStorage.getItem('bag'))[data.webID] ? true : false;
    }
    if (!exist) {
      let obj = JSON.parse(window.localStorage.getItem('bag'));
      obj = { ...obj, [data.webID]: { img: data.image.url, title: data.productTitle, price: data.prices[0].regularPrice.minPrice } };

      window.localStorage.setItem('bag', JSON.stringify(obj));
      setNumberBag(prev => prev + 1)
    }
  }

  const handleRemoveBag = (data) => {
    let obj = JSON.parse(window.localStorage.getItem('bag'));
    delete (obj)[data.webID]

    window.localStorage.setItem('bag', JSON.stringify(obj));
    setNumberBag(prev => prev - 1)
  }

  const handleAddFavorite = (data) => {
    let obj = window.localStorage.getItem('favorite') ? JSON.parse(window.localStorage.getItem('favorite')) : {}
    obj = { ...obj, [data.webID]: { img: data.image.url, title: data.productTitle, price: data.prices[0].regularPrice.minPrice } };

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
      handleRemoveFavorite
    }} >
      {children}
    </AddContext.Provider>
  )
}

export const GetAddContext = () => {
  return useContext(AddContext)
}
import React from 'react'
import { useState } from 'react';
import { GetAddContext } from '../AddContext'

const ProductThumnail = ({data}) => {
  const [active, setActive] = useState(true);
  const {handleRemoveFavorite} = GetAddContext();

  const handleClose = () => {
    handleRemoveFavorite(data);
    setActive(false);
  }

  return (
    <div className='h-[80px] bg-white w-[95%] mx-auto my-4 relative'>
      <div className='flex'>
        <img src={data.img} alt={data.title} className="h-[80px] p-2 border-2 object-cover object-center" />

        <div className='w-[70%] ml-2'>
          <h1 className='font-bold h-[20px] overflow-hidden'>{data.title}</h1>
          <h1 className='text-red-500'>{data.price} $</h1>

          {/* count */}
        </div>
      </div>

      <i onClick={handleClose} className="fa-solid fa-circle-xmark absolute right-2 bottom-2"></i>
    </div>
  )
}

export default ProductThumnail
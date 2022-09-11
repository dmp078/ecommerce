import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GetAddContext } from '../AddContext'

const ProductThumnail = ({data, type}) => {
  const {handleRemoveFavorite, handleRemoveBag, handleAddBag, handleCalcCost} = GetAddContext();

  const navigate = useNavigate()

  const handleClose = () => {
    if (type == 'favorite') {
      handleRemoveFavorite(data);
    } else {
      handleRemoveBag(data)
      handleCalcCost();
    }
  }

  return (
    <div className='h-[80px] bg-white w-[95%] mx-auto my-4 relative'>
      <div className='flex'>
        <img onClick={() => {navigate(`/product/${Number(data.webID)}`)}} src={data.img} alt={data.title} className="cursor-pointer h-[80px] border-r-2 border-slate-300 object-cover object-center" />

        <div className='w-[70%] ml-2'>
          <h1 className='font-bold h-[20px] overflow-hidden'>{data.title}</h1>
          <h1 className='text-red-500'>{data.price} $</h1>

          {/* count */}
          {data.count && (
            <div className="grid grid-cols-3 font-bold w-fit text-[12px]">
              <button onClick={() =>{
                // setNumber(e => (e - 1 ? e - 1 : 1));
                handleAddBag(data, data.count - 1 ? data.count - 1 : 1);
                handleCalcCost();
              }} 
              className="w-5 h-5 bg-slate-600 text-white mr-2">-</button>
              <h1 className="w-fit mx-auto text-center">{data.count}</h1>
              <button onClick={() => {
                // setNumber(e => e + 1)
                handleAddBag(data, data.count + 1);
                handleCalcCost();
              }} 
              className="w-5 h-5 bg-slate-600 text-white ml-2">+</button>
            </div>
          )}
        </div>
      </div>

      <i onClick={handleClose} className="fa-solid cursor-pointer fa-circle-xmark absolute right-2 bottom-2"></i>
    </div>
  )
}

export default ProductThumnail
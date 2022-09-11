import React from 'react'
import { Link } from 'react-router-dom';
import { GetAddContext } from '../AddContext';
import ProductThumnail from './ProductThumnail';

const ThumnailView = ({data, type}) => {

  const {cost} = GetAddContext();

  let obj = [];
  for (var e in data) {
    obj = [...obj, data[e]];
  }
  
  let flag = true;
  if (!obj.length || type == 'favorite') flag = false;
  
  return (
    <div className='bg-slate-300 w-[300px] max-h-[60vh] overflow-y-auto shadow-2xl absolute right-[-12px] mt-1'>
      {obj.map((e, id) => (
        <ProductThumnail type={type} key={id} data={e} />
      ))}

      {!obj.length && (
        <div className='h-[150px] flex text-black font-bold'>
          <h1 className='h-fit my-auto w-full text-center text-3xl'>NOTHING !</h1>
        </div>
      )}

      {type == 'bag' && (
        
        <h1 className="bg-white w-fit mx-auto py-1 px-6 my-2 font-bold text-red-500">Total: {cost} $</h1>
      )}

      {flag && <div className='flex'>
        <Link to='/pay' className='w-fit mx-auto py-2 my-2 font-bold bg-green-600 px-10 cursor-pointer'>PAY</Link>
      </div>}
      
    </div>
  )
}

export default ThumnailView
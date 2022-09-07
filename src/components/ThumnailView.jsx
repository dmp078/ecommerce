import React from 'react'
import ProductThumnail from './ProductThumnail';

const ThumnailView = ({data}) => {
  // count, img, title, price

  let obj = [];
  for (var e in data) {
    obj = [...obj, data[e]];
  }

  return (
    <div className='bg-slate-300 w-[300px] shadow-2xl absolute right-[-12px] mt-1'>
      {obj.map((e, id) => (
        <ProductThumnail key={id} data={e} />
      ))}
    </div>
  )
}

export default ThumnailView
import React from 'react'
import { GetAddContext } from '../AddContext';
import Navbar from '../components/Navbar'
import ProductThumnail from '../components/ProductThumnail';
import Footer from '../components/Footer';

const Pay = () => {

  const {cost} = GetAddContext();
  const data = window.localStorage.getItem('bag') ? JSON.parse(window.localStorage.getItem('bag')) : {}

  let obj = [];
  for (var e in data) {
    obj = [...obj, data[e]];
  }

  return (
    <div className=''>
      <div className='mt-12 md:flex flex-row px-4 bg-slate-500 w-full min-h-screen py-4'>
        <div className='w-[85%] md:w-full mx-auto max-h-[60vh]'>
          {obj.map((e, id) => (
            <ProductThumnail type={'bag'} key={id} data={e} />
          ))}
  
          <div className="bg-white w-fit mx-auto py-1 px-6 mt-12 mb-4 font-bold text-red-500">Total: {cost} $</div>
        </div>

        <div className='w-[60%] mx-auto flex flex-col'>
            <div className='w-full my-2'>
              <h1 className='ml-6 font-bold'>Email:</h1>
              <input type="email" placeholder='example@gmail.com' className='w-full text-xl text-black pl-6 py-2 rounded-full  ' />
            </div>

            <div className='w-full my-2'>
              <h1 className='ml-6 font-bold'>Phone Number:</h1>
              <input type="number" placeholder='0911911911' className='w-full text-xl text-black pl-6 py-2 rounded-full  ' />
            </div>

            <div className='w-full my-2'>
              <h1 className='ml-6 font-bold'>Particular Address:</h1>
              <input type="text" placeholder='Ha Noi, Nam Tu Liem, ...' className='w-full text-xl text-black pl-6 py-2 rounded-full  ' />
            </div>

            <button className='bg-green-600 font-bold text-2xl mx-auto px-6 py-2 mt-4 shadow-2xl border-2 border-black'>Order</button>
        </div>
      </div>

      <Footer />

      <Navbar />
    </div>
  )
}

export default Pay
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-300 flex flex-col md:flex-row pt-4 py-6 text-sm text-slate-600'>
      <div className='mx-auto my-4'>
        <h1 className='font-bold text-black'>HELP & INFORMATION</h1>
        <h1>Help</h1>
        <h1>Track order</h1>
        <h1>Delivery & returns</h1>
      </div>

      <div className='mx-auto my-4'>
        <h1 className='font-bold text-black'>ABOUT ASOS</h1>
        <h1>About us</h1>
        <h1>Careers at ASOS</h1>
        <h1>Corporate responsibility</h1>
        <h1>Investors' site</h1>
      </div>

      <div className='mx-auto my-4'>
        <h1 className='font-bold text-black'>MORE FROM ASOS</h1>
        <h1>Mobile and ASOS apps</h1>
        <h1>ASOS Marketplace</h1>
        <h1>Gift vouchers</h1>
        <h1>Black Friday</h1>
        <h1>ASOS x Thrift+</h1>
      </div>
    </div>
  )
}

export default Footer
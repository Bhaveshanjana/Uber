import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/Home' className='fixed text-2xl left-4 top-3 bg-white/70 rounded-lg'>
        <i className="ri-home-3-line p-1"></i>
        </Link>
      <div className='h-1/2'>
        <img className='h-full w-full object-cover' src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif" alt="" />
      </div>
    <div className='h-1/2 p-3'>
    <div className="flex justify-between pt-2 border-b-2 ">
        <img
          className="h-16 bg-gray-200 rounded-full"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1596627972/assets/e7/e861a8-30ec-4d57-8045-7186f6c5ec35/original/comfort.png"
          alt=""
        />
        <div className="text-end">
          <h2 className="uppercase text-gray-500 text-lg ">Yash</h2>
          <h4 className="text-2xl font-semibold">Rj 09 uc 2002</h4>
          <p className=" text-gray-500 text-lg">Platina</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 flex-col px-4 pt-4">
        <div className="w-full space-y-6">
          <div className="flex items-center gap-6 border-b-2 ">
            <i className="ri-map-pin-range-line text-xl"></i>
            <div>
              <h1 className="text-2xl font-semibold ">1-C-80,</h1>
              <p className="text-lg text-gray-600">
                {" "}
                housing board, segwa, chittoragrh
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 border-b-2">
            <i className="ri-currency-line text-xl"></i>
            <div>
              <h1 className="text-2xl font-semibold ">$190</h1>
              <p className="text-lg text-gray-600"> Cash</p>
            </div>
          </div>
        </div>
      </div>
    <button className='w-full bg-green-500 text-2xl my-6 rounded-lg text-white p-1 '>Make payment</button>
    </div>
    </div>
  )
}

export default Riding

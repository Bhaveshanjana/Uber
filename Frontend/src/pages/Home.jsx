import React from 'react'
import {Link} from 'react-router-dom'

const home = () => {
  return (
    <div className=''>
      <div className='bg-cover bg-[url(https://images.unsplash.com/photo-1695066584644-5453334ff5ac?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen bg-gray-600/40  w-full flex justify-between flex-col'>
        <img className='w-16 ml-4 pt-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uberlogo" />
        <div className='bg-white py-4 px-4 mb-5 mx-4 rounded-md'>
          <h2 className='font-bold text-2xl'>Get started with uber</h2>
          <Link to='/user-login' className='rounded flex justify-center bg-black text-white w-full py-3 mt-4'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default home

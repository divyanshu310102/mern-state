import React from 'react'
import {FaSearchengin} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
      <div>
        <header className='bg-slate-200 shadow-md rounded-lg'>
         <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Sahand</span>
            <span className='text-slate-700'>Estate</span>

          </h1>
          <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input 
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            />
            <FaSearchengin className='text-slate-500' />
            
          </form>
          <div className='flex gap-4 '>
            <Link to={'/'} className='text-slate-500 hover:underline'>Home</Link>
            <Link to={'/about'} className='text-slate-500 hover:underline'>About</Link>
            <Link to={'/sign-in'} className='text-slate-500 hover:underline'>SignIn</Link>
            <Link to={'/sign-up'} className='bg-red-500 rounded-full text-center  px-4 py-1 text-white'>Register</Link>

          </div>

         </div>
        </header>
      </div>


  )
}

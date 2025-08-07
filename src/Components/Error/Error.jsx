import React from 'react'
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center h-screen text-center text-black'>
      <h1 className='text-4xl font-medium text-[110px] leading-[115px] tracking-[3%] mb-10'>404 Not Found</h1>
      <span className='mb-10'>Your visited page not found.You may go to home page</span>
      <button type="button" onClick={() => navigate("/home")} className="text-white bg-[#DB4444] hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-2xl text-sm px-12 py-4 text-center me-2 mb-2 dark:bg-[#DB4444] dark:hover:bg-red-700 dark:focus:ring-red-900 self-center">Back to home page</button>
    </div>
  )
}

export default Error
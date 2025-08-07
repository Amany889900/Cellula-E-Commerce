import React from 'react'
import googlePlay from "./../../assets/Images/google_play.png"
import appStore from "./../../assets/Images/app_store.png"
import QRCode from "./../../assets/Images/QR_code.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'; // regular style

function Footer() {
  return (
  <>
  <div className=' bg-black w-full'>
   <div className='w-[90%] mx-auto flex flex-col justify-center content-center sm:flex-row sm:flex-nowrap gap-5 p-18'>
     <div className='text-white w-full sm:w-[1/5]'>
      <h2 className='mb-6'>Exclusive</h2>
      <ul>
        <li className='mb-4'>Subscribe</li>
        <li className='mb-4'>Get 10% off your first order</li>
        <li className='mb-4'> <div className='relative w-full'>
        <input type="email" id="base-input" className="bg-black border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[217px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-gray-500 pr-10" placeholder='Enter your email' />
        <span className='absolute inset-y-0 right-0 flex items-center pr-8 text-white'><FontAwesomeIcon icon={faPaperPlane} rotation={45} /></span>
        </div>
</li>
      </ul>
    </div>
     <div className='text-white sm:w-[1/5] w-full'>
      <h2 className='mb-6'>Support</h2>
      <ul>
        <li className='mb-4'>111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</li>
        <li className='mb-4'>exclusive@gmail.com</li>
        <li className='mb-4'>+88015-88888-9999</li>
      </ul>
    </div>
     <div className='text-white sm:w-[1/5] w-full'>
      <h2 className='mb-6'>Account</h2>
      <ul>
        <li className='mb-4'>My Account</li>
        <li className='mb-4'>Login / Register</li>
        <li className='mb-4'>Cart</li>
        <li className='mb-4'>Wishlist</li>
        <li className='mb-4'>Shop</li>
      </ul>
    </div>
    <div className='text-white sm:w-[1/5] w-full'>
      <h2 className='mb-6'>Quick Link</h2>
      <ul>
        <li className='mb-4'>Privacy Policy</li>
        <li className='mb-4'>Terms Of Use</li>
        <li className='mb-4'>FAQ</li>
        <li className='mb-4'>Contact</li>
      </ul>
    </div>
     <div className='text-white sm:w-[1/5] w-full'>
      <h2 className='mb-6'>Download App</h2>
      <ul>
        <li className='mb-2 text-slate-400 w-[194px] text-[12px] py-0.5 font-medium leading-[18px]'>Save $3 with App New User Only</li>
        <li className='mb-6'>
          <div className='flex justify-between w-[198px] h-[84px]'>
            <div className='w-[80px] h-[80px]'><img src={QRCode} alt="QR Code" className='w-full'/></div>
            <div className='w-[110px] h-[84px] ml-[8px]'>
              <div className='w-full h-[40px] mb-[4px]'><img src={googlePlay} alt="Google Play" className='w-full'/></div>
              <div className='w-full h-[40px]'><img src={appStore} alt="App Store" className='w-full' /></div>
            </div>
          </div>
        </li>
        <li className='mb-3 flex justify-between'>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin-in"></i>
        </li>
      </ul>
    </div>
   </div>
  </div>
  </>
  )
}

export default Footer
import React from 'react'
import JBL from './../../assets/Images/JBL.png'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef } from "react";
import joyStick from "./../../assets/Images/joyStick.png"
import keyboard from "./../../assets/Images/keyboard.png"
import monitor from "./../../assets/Images/monitor.png"
import chair from "./../../assets/Images/chair.png"


const categories = [
  {title:"Phones",icon:<i className="fa-solid fa-mobile-screen-button"></i>},
  {title:"Computers",icon:<i className="fa-solid fa-desktop"></i>},
  {title:"Smart Watches",icon:<i className="fa-solid fa-clock"></i>},
  {title:"Camera",icon:<i className="fa-solid fa-camera"></i>},
  {title:"Head Phones",icon:<i className="fa-solid fa-headphones"></i>},
  {title:"Gaming",icon:<i className="fa-solid fa-gamepad"></i>},
  {title:"Clothes",icon:<i className="fa-solid fa-shirt"></i>},
  {title:"Coffee Essentials",icon:<i className="fa-solid fa-mug-hot"></i>},
  {title:"Shoes",icon:<i className="fa-solid fa-shoe-prints"></i>},
  {title:"Bikes",icon:<i className="fa-solid fa-bicycle"></i>},
  {title:"Books",icon:<i className="fa-solid fa-book"></i>},
  {title:"Bags",icon:<i className="fa-solid fa-bag-shopping"></i>},
  {title:"Gifts",icon:<i className="fa-solid fa-gift"></i>},
  {title:"Board Games",icon:<i className="fa-solid fa-chess"></i>},
  {title:"Sports",icon:<i className="fa-solid fa-baseball-bat-ball"></i>},
]

const sales=[
  {image:joyStick,title:"HAVIT HV-G92 Gamepad",oPrice:"$224",nPrice:"$120",sale:"-40%",rate:"(88)"},
  {image:keyboard,title:"AK-900 Wired Keyboard",oPrice:"$1160",nPrice:"$754",sale:"-35%",rate:"(75)"},
  {image:monitor,title:"IPS LCD Gaming Monitor",oPrice:"$400",nPrice:"$280",sale:"-30%",rate:"(99)"},
  {image:chair,title:"S-Series Comfort Chair",oPrice:"$400",nPrice:"$375",sale:"-30%",rate:"(99)"},
  {image:chair,title:"S-Series Comfort Chair",oPrice:"$400",nPrice:"$375",sale:"-30%",rate:"(99)"},
  {image:monitor,title:"IPS LCD Gaming Monitor",oPrice:"$400",nPrice:"$280",sale:"-30%",rate:"(99)"},
  {image:keyboard,title:"AK-900 Wired Keyboard",oPrice:"$1160",nPrice:"$754",sale:"-35%",rate:"(75)"},
  {image:joyStick,title:"HAVIT HV-G92 Gamepad",oPrice:"$224",nPrice:"$120",sale:"-40%",rate:"(88)"},
]

function Home() {
 const swiperRef = useRef(null); 
 const swiperRef2 = useRef(null); 
  return (

  <>
  
  
   <div className="w-[80%] mx-auto px-10 py-10 mt-40 mb-40 relative border-b-1">
    <span className="text-[#DB4444] text-[16px] font-bold  leading-[20px] mb-4 before:inline-block before:rounded-[4px] before:w-[20px] before:h-[40px] before:bg-[#DB4444] before:content-[''] before:mr-4 inline-flex items-center">Today's</span>
    <h2 className="font-semibold text-[24px] sm:text-[36px] leading-[48px] tracking-[4%] mb-14">Flash Sales</h2>
   <div className="mb-20">
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => (swiperRef2.current = swiper)}
      breakpoints={{
  
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1280: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
}}
    >
     {sales.map((product,idx)=>(
       <SwiperSlide key={idx}>
       <div className="">
    <div className="relative p-5 mt-10 bg-[#F5F5F5] w-[270px] flex flex-col gap-3 items-center">
    <div className="w-[190px] h-[180px] mt-10 "><img src={product.image} alt="" className="w-full h-full" /></div>
    <div className="w-[55px] h-[26px] p-y-[4px] p-x-[12px] text-white text-center bg-[#DB4444] absolute top-[12px] left-[12px] rounded-[4px]">{product.sale}</div>
    <div className="absolute right-0 mr-2 top-[12px]">
      <button className="bg-white w-[36px] h-[36px] rounded-full flex justify-center items-center mb-4"><i className="fa-regular fa-heart"></i></button>
      <button className="bg-white w-[36px] h-[36px] rounded-full flex justify-center items-center"><i className="fa-regular fa-eye"></i></button>
    </div>
  </div>
  <h4 className="font-medium text-[16px] leading-[24px] mt-4">{product.title}</h4>
  <span className="text-[#DB4444] mr-4 font-bold inline-block mb-1">{product.nPrice}</span>
  <span className="text-gray-400 line-through inline-block mb-1">{product.oPrice}</span>
  <div className="flex">
    <div>
    <i className="fa-solid fa-star mr-1 text-yellow-300"></i>
    <i className="fa-solid fa-star mr-1 text-yellow-300"></i>
    <i className="fa-solid fa-star mr-1 text-yellow-300"></i>
    <i className="fa-solid fa-star mr-1 text-yellow-300"></i>
    <i className="fa-solid fa-star mr-3 text-yellow-300"></i>
  </div>
   <p className="text-gray-400">{product.rate}</p>
  </div>
  
  </div>

       </SwiperSlide>
     ))}
      
    </Swiper>
   </div>
   <div className="absolute top-24 right-0 mr-10">
     <button type="button"  onClick={() => swiperRef2.current?.slidePrev()}  className="text-gray-900 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><i className="fa-solid fa-arrow-left"></i></button>
     <button type="button"   onClick={() => swiperRef2.current?.slideNext()}  className="text-gray-900 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><i className="fa-solid fa-arrow-right"></i></button>
   </div>
   <div className="flex justify-center">
     <button className="text-white text-center bg-[#DB4444] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  rounded-[4px] p-y-[16px] p-x-[48px] text-sm w-[234px] h-[56px]  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-block  mb-5">View All Products</button>
   </div>
 

  </div>
   


  <div className="w-[80%] mx-auto px-10 py-10 mt-40 mb-40 relative border-b-1">
    <span className="text-[#DB4444] text-[16px] font-bold  leading-[20px] mb-4 before:inline-block before:rounded-[4px] before:w-[20px] before:h-[40px] before:bg-[#DB4444] before:content-[''] before:mr-4 inline-flex items-center">Categories</span>
    <h2 className="font-semibold text-[24px] sm:text-[36px] leading-[48px] tracking-[4%] mb-14">Browse By Category</h2>
   <div className="mb-20">
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      breakpoints={{
  
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1280: {
    slidesPerView: 6,
    spaceBetween: 30,
  },
}}
    >
     {categories.map((cat,idx)=>(
       <SwiperSlide key={idx}>
        <div className="text-center border-1 py-10 rounded-[4px] flex flex-col justify-center items-center gap-4 hover:text-[white] hover:bg-[#DB4444] transition duration-300 ease-in-out">
          <div className="text-2xl">{cat.icon}</div>
          <div>{cat.title}</div>
        </div>
       </SwiperSlide>
     ))}
      
    </Swiper>
   </div>
   <div className="absolute top-24 right-0 mr-10">
     <button type="button"  onClick={() => swiperRef.current?.slidePrev()}  className="text-gray-900 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><i className="fa-solid fa-arrow-left"></i></button>
     <button type="button"   onClick={() => swiperRef.current?.slideNext()}  className="text-gray-900 w-[50px] h-[50px] inline-flex justify-center items-center rounded-full bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><i className="fa-solid fa-arrow-right"></i></button>
   </div>
  </div>
   
   
  
  <div className="bg-black w-[80%] mx-auto flex justify-center items-center gap-20 mt-40 mb-40 p-20">
    <div className='w-[1/2]'>
      <span className="text-[#00FF66] text-[16px] font-semibold leading-[20px] mb-4">Categories</span>
      <h1 className="text-white text-[48px] leading-[60px] tracking-[4%] font-semibold mb-4">Enhance Your <br /> Music Experience</h1>
      <div className="flex justify-between gap-2 mb-4">
        <div className='rounded-full w-[80px] h-[80px] mt-6 mb-4 p-4 text-center bg-white flex justify-center items-center text-black'>23 <br />Hours</div>
        <div className='rounded-full w-[80px] h-[80px] mt-6 mb-4 p-4 text-center bg-white flex justify-center items-center text-black'>05 <br />Days</div>
        <div className='rounded-full w-[80px] h-[80px] mt-6 mb-4 p-4 text-center bg-white flex justify-center items-center text-black'>59 <br />Minutes</div>
        <div className='rounded-full w-[80px] h-[80px] mt-6 mb-4 p-4 text-center bg-white flex justify-center items-center text-black'>35 <br />Seconds</div>
      </div>

      <button type="button" className="w-[171px] h-[56px] rounded-[4px] focus:outline-none text-white bg-[#00FF66] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium text-sm px-[48px] py-[16px] me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Buy Now!</button>
    </div>
    <div className='w-[1/2] shadow-lg'>
      <img src={JBL} alt="JBL" className='w-full' />
    </div>

  </div>
  
  </>


  )
}

export default Home
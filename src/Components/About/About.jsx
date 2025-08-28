import React from 'react'
import aboutImg from "./../../assets/Images/about.png"
import employee1Img from "./../../assets/Images/employee1.png"
import employee2Img from "./../../assets/Images/employee2.png"
import employee3Img from "./../../assets/Images/employee3.png"

function About() {
  return (
    <>
        <div className="w-[80%] mx-auto mt-60">
         <div className="flex flex-col gap-10  lg:flex-row items-center mb-40"> 
          <div className='w-full lg:w-1/2'>
            <h1 className="text-[54px] font-semibold leading-[64px] tracking-[6%] mb-10">Our Story</h1>
            <p className="text-[16px] leading-[26px] mb-5">Launced in 2015, Exclusive is South Asia’s premier online shopping <br /> makterplace with an active presense in Bangladesh. Supported <br /> by wide range of tailored marketing, data and service solutions, <br /> Exclusive has 10,500 sallers and 300 brands and serves 3 <br /> millioons customers across the region. </p>
            <p className="text-[16px] leading-[26px]">Exclusive has more than 1 Million products to offer, growing at a <br /> very fast. Exclusive offers a diverse assotment in categories <br /> ranging  from consumer.</p>
          </div>
          <div className='w-full lg:w-1/2'><img src={aboutImg} alt="aboutImg" className="w-full" /></div>
         </div>
    
         <div className="flex mb-40 flex-wrap">
         <div className="p-2  w-full lg:w-1/4 md:w-1/2">
           <div className='rounded-2xl flex flex-col justify-center items-center w-full p-5 border-1 bg-white text-black hover:bg-[#DB4444] ease-in duration-300 group hover:text-white'>
            <div className="w-[80px] group-hover:bg-white group-hover:text-black ease-in duration-300 h-[80px] flex items-center justify-center text-3xl rounded-full bg-black text-white shadow-[0_0_20px_gray] group-hover:shadow-[0_0_20px_white]"><i class="fa-solid fa-store"></i></div>
            <p className="font-bold my-5 text-[32px] leading-[30px] tracking-[4%]">10.5K</p>
            <p className="text-[16px] leading-[24px] tracking-[4%]">Our stores</p>
          </div>
         </div>
    
         <div className="p-2 w-full lg:w-1/4 md:w-1/2">
           <div className='rounded-2xl flex flex-col justify-center items-center w-full p-5 border-1 bg-white text-black hover:bg-[#DB4444] ease-in duration-300 group hover:text-white'>
            <div className="w-[80px] group-hover:bg-white group-hover:text-black ease-in duration-300 h-[80px] flex items-center justify-center text-3xl rounded-full bg-black text-white shadow-[0_0_20px_gray] group-hover:shadow-[0_0_20px_white]"><i class="fa-solid fa-dollar-sign"></i></div>
            <p className="font-bold my-5 text-[32px] leading-[30px] tracking-[4%]">33K</p>
            <p className="text-[16px] leading-[24px] tracking-[4%]">Monthly sales</p>
          </div>
         </div>
    
           <div className="p-2  w-full lg:w-1/4 md:w-1/2">
           <div className='rounded-2xl flex flex-col justify-center items-center w-full p-5 border-1 bg-white text-black hover:bg-[#DB4444] ease-in duration-300 group hover:text-white'>
            <div className="w-[80px] group-hover:bg-white group-hover:text-black ease-in duration-300 h-[80px] flex items-center justify-center text-3xl rounded-full bg-black text-white shadow-[0_0_20px_gray] group-hover:shadow-[0_0_20px_white]"><i class="fa-solid fa-bag-shopping"></i></div>
            <p className="font-bold my-5 text-[32px] leading-[30px] tracking-[4%]">45.5K</p>
            <p className="text-[16px] leading-[24px] tracking-[4%]">Active customers</p>
          </div>
         </div>
    
          <div className="p-2  w-full lg:w-1/4 md:w-1/2">
           <div className='rounded-2xl flex flex-col justify-center items-center w-full p-5 border-1 bg-white text-black hover:bg-[#DB4444] ease-in duration-300 group hover:text-white'>
            <div className="w-[80px] group-hover:bg-white group-hover:text-black ease-in duration-300 h-[80px] flex items-center justify-center text-3xl rounded-full bg-black text-white shadow-[0_0_20px_gray] group-hover:shadow-[0_0_20px_white]"><i class="fa-solid fa-sack-dollar"></i></div>
            <p className="font-bold my-5 text-[32px] leading-[30px] tracking-[4%]">25K</p>
            <p className="text-[16px] leading-[24px] tracking-[4%]">Annual gross sale</p>
          </div>
         </div>
         </div>
    
         <div className="flex mb-40 flex-wrap">
          <div className="p-2 w-full lg:w-1/3 md:w-1/2">
          <div className="bg-[#F5F5F5]">
            <img src={employee1Img} alt="employee1" className='w-full h-[450px]' />
          </div>
          <p className="font-medium text-[32px] leading-[30px] tracking-[4%] my-5">Tom Cruise</p>
          <p className="text-[16px] leading-[24px] my-5">Founder & Chairman</p>
          <div>
            <i class="fa-brands fa-twitter text-2xl mr-4"></i>
            <i class="fa-brands fa-instagram text-2xl mr-4"></i>
            <i class="fa-brands fa-linkedin-in text-2xl mr-4"></i>
          </div>
          </div>
          <div className="p-2 w-full lg:w-1/3 md:w-1/2">
          <div className="bg-[#F5F5F5]">
            <img src={employee2Img} alt="employee1" className='w-full h-[450px]' />
          </div>
          <p className="font-medium text-[32px] leading-[30px] tracking-[4%] my-5">Emma Watson</p>
          <p className="text-[16px] leading-[24px] my-5">Managing Director</p>
          <div>
            <i class="fa-brands fa-twitter text-2xl mr-4"></i>
            <i class="fa-brands fa-instagram text-2xl mr-4"></i>
            <i class="fa-brands fa-linkedin-in text-2xl mr-4"></i>
          </div>
          </div>
          <div className="p-2 w-full lg:w-1/3 md:w-1/2">
          <div className="bg-[#F5F5F5]">
            <img src={employee3Img} alt="employee1" className='w-full h-[450px]' />
          </div>
          <p className="font-medium text-[32px] leading-[30px] tracking-[4%] my-5">Will Smith</p>
          <p className="text-[16px] leading-[24px] my-5">Product Designer</p>
          <div>
            <i class="fa-brands fa-twitter text-2xl mr-4"></i>
            <i class="fa-brands fa-instagram text-2xl mr-4"></i>
            <i class="fa-brands fa-linkedin-in text-2xl mr-4"></i>
          </div>
          </div>
         </div>
    
          <div className="flex mb-40 flex-wrap">
         <div className="p-2  w-full lg:w-1/3 md:w-1/2">
           <div className='rounded-2xl flex flex-col justify-center items-center w-full p-5  bg-white text-black hover:bg-[#DB4444] ease-in duration-300 group hover:text-white'>
            <div className="w-[80px] group-hover:bg-white group-hover:text-black ease-in duration-300 h-[80px] flex items-center justify-center text-3xl rounded-full bg-black text-white shadow-[0_0_20px_gray] group-hover:shadow-[0_0_20px_white]"><i class="fa-solid fa-truck-fast"></i></div>
            <p className="font-bold my-5 text-[20px] leading-[28px]">FREE AND FAST DELIVERY</p>
            <p className="text-[14px] leading-[21px]">Free delivery for all orders over $140</p>
          </div>
         </div>
    
         <div className="p-2 w-full lg:w-1/3 md:w-1/2">
           <div className='rounded-2xl flex flex-col justify-center items-center w-full p-5  bg-white text-black hover:bg-[#DB4444] ease-in duration-300 group hover:text-white'>
            <div className="w-[80px] group-hover:bg-white group-hover:text-black ease-in duration-300 h-[80px] flex items-center justify-center text-3xl rounded-full bg-black text-white shadow-[0_0_20px_gray] group-hover:shadow-[0_0_20px_white]"><i class="fa-solid fa-headphones"></i></div>
            <p className="font-bold my-5 text-[20px] leading-[28px]">24/7 CUSTOMER SERVICE</p>
            <p className="text-[14px] leading-[21px]">Friendly 24/7 customer support</p>
          </div>
         </div>
    
           <div className="p-2  w-full lg:w-1/3 md:w-1/2">
           <div className='rounded-2xl flex flex-col justify-center items-center w-full p-5  bg-white text-black hover:bg-[#DB4444] ease-in duration-300 group hover:text-white'>
            <div className="w-[80px] group-hover:bg-white group-hover:text-black ease-in duration-300 h-[80px] flex items-center justify-center text-3xl rounded-full bg-black text-white shadow-[0_0_20px_gray] group-hover:shadow-[0_0_20px_white]"><i class="fa-solid fa-calendar-check"></i></div>
            <p className="font-bold my-5 text-[20px] leading-[28px]">MONEY BACK GUARANTEE</p>
            <p className="text-[14px] leading-[21px]">We reurn money within 30 days</p>
          </div>
         </div>
    
        
         </div>
    
    
        </div>
        </>
  )
}

export default About
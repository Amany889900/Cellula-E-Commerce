import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"

function ProductDetails() {
  const {id} = useParams();
  const [productDetails,setProductDetails] = useState({});
  
  
   useEffect(() => {
    async function getProduct() {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
        // console.log(data.id)
        setProductDetails(data);
      } catch (err) {
        console.log(err, "Error from getProduct in productDetails page");
      }
    }
    getProduct();
  }, [id]);

  return (
   <>
   <div className='w-[80%] mx-auto'>
     <div className='flex flex-col lg:flex-row justify-between gap-[40px] my-60'>
      <div className='flex justify-center flex-row lg:flex-col w-full lg:w-1/5 lg:h-[600px]'>
     <div className='w-[80px] h-[80px] lg:w-[170px] lg:h-[138px] lg:mb-[16px]'><img src={productDetails.image} alt={productDetails.title} className='w-full h-full' /></div> 
     <div className='w-[80px] h-[80px] lg:w-[170px] lg:h-[138px] lg:mb-[16px]'><img src={productDetails.image} alt={productDetails.title} className='w-full h-full' /></div> 
     <div className='w-[80px] h-[80px] lg:w-[170px] lg:h-[138px] lg:mb-[16px]'><img src={productDetails.image} alt={productDetails.title} className='w-full h-full' /></div> 
     <div className='w-[80px] h-[80px] lg:w-[170px] lg:h-[138px]'><img src={productDetails.image} alt={productDetails.title} className='w-full h-full' /></div> 
      </div>
      <div className='w-full lg:w-2/5 flex justify-center'><div><img src={productDetails.image} alt={productDetails.title} className='max-w-full h-auto lg:max-h-[600px] object-contain' /></div> </div>  
     <div className='w-full lg:w-2/5'>
      <h3 className='font-semibold text-[24px] leading-[24px] tracking-[3%]'>{productDetails.title}</h3>
       <div className="flex">
    <div className='mt-5'>
    <i className="fa-solid fa-star mr-1 text-yellow-300"></i>
    <i className="fa-solid fa-star mr-1 text-yellow-300"></i>
    <i className="fa-solid fa-star mr-1 text-yellow-300"></i>
    <i className="fa-solid fa-star mr-1 text-yellow-300"></i>
    <i className="fa-solid fa-star mr-3 text-yellow-300"></i>
  </div>
   {/* <p className="text-gray-400">({productDetails.rating.count})</p> */}
  </div> 
  <p className='font-normal text-[24px] leading-[24px] tracking-[3%] my-5'>${productDetails.price}</p>
  <p className='font-normal text-[14px] leading-[21px] mb-5 border-b-2 pb-10'>{productDetails.description}</p>
 <div className='mt-2 flex items-center'>
   <span className='inline-block text-[20px] leading-[20px] tracking-[3%]'>Colours:</span>
  <span className='inline-block mx-2 rounded-full bg-blue-400 border-2 p-2'></span>
  <span className='inline-block mx-2 rounded-full bg-[#db4444] p-2'></span>
 </div>
 <div className='my-4'>
  <span className='inline-block text-[20px] leading-[20px] tracking-[3%]'>Size:</span>
  <button className='inline-flex items-center justify-center mx-2 rounded rounded-2 w-[32px] h-[32px] bg-[#db4444] p-3'>XS</button>
  <button className='inline-flex items-center justify-center mx-2 rounded rounded-2 w-[32px] h-[32px] border-1 p-3'>S</button>
  <button className='inline-flex items-center justify-center mx-2 rounded rounded-2 w-[32px] h-[32px] border-1 p-3'>M</button>
  <button className='inline-flex items-center justify-center mx-2 rounded rounded-2 w-[32px] h-[32px] border-1 p-3'>L</button>
  <button className='inline-flex items-center justify-center mx-2 rounded rounded-2 w-[32px] h-[32px] border-1 p-3'>XL</button>
 </div>
 <div>
  <span className='inline-flex justify-between w-[159px] h-[44px] border-y-1 border-l-1 rounded rounded-2'>
    <button className='inline-flex w-[40px] h-[44px] border-r-1 justify-center items-center'>-</button>
    <span className='inline-flex justify-center items-center'>2</span>
    <button className='inline-flex w-[40px] h-[44px]  text-white rounded-br-sm rounded-tr-sm  bg-[#db4444] justify-center items-center'>+</button>
    </span>
  <button className='text-white bg-[#db4444] inline-flex justify-center items-center w-[165px] h-[44px] mx-4 rounded rounded-2'>Buy Now</button>
  <button className="inline-flex justify-center items-center w-[40px] h-[40px] border-2 rounded-full"><i className="fa-regular fa-heart"></i></button>
 </div>
     </div>
     </div>
   </div>
   </>
  )
}

export default ProductDetails
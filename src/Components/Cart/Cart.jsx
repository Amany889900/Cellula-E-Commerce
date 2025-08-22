import React, { useEffect } from 'react'


import { useSelector, useDispatch } from 'react-redux'
import joyStick from "./../../assets/Images/joyStick.png"
import { decrementQnty, incrementQnty, removeFromCart } from '../../Store/Slices/CartSlice';
import { useNavigate } from 'react-router-dom';
import Checkout from './../Checkout/Checkout';
function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}, [cartItems]);
 useEffect(() => {
  localStorage.setItem("total", JSON.stringify(totalPrice));
}, [totalPrice]);
const navigate = useNavigate();
  return (
   <>
   <div className='w-[80%] mx-auto mt-60'>
    <div className='bg-white p-3 mb-15 border-3 border-white shadow-2xl shadow-gray-300 flex justify-between'>
     <p>Product</p>
     <p>Price</p>
     <p>Quantity</p>
     <p>Subtotal</p>
    </div>
    {cartItems?.map((product,idx)=>(
      <div key={idx} className='bg-white p-3 mb-15 border-3 group relative border-white shadow-2xl shadow-gray-300 flex justify-between'>
     <button onClick={()=>{
        dispatch(removeFromCart(product.id))
     }} className='cursor-pointer absolute duration-300 ease-in invisible left-1.5 top-1.5 group-hover:visible '><i class="fa-solid fa-circle-xmark text-red-700"></i></button>
     <div className="flex justify-between items-center">
        <img src={product.image} alt="" className='w-[54px] h-[54px] mr-5' />
        <p>{product.title.slice(0,20)}</p>
     </div>
     <p>{product.price.toFixed(2)}</p>
    <div className='relative border rounded w-[72px] h-[44px] flex justify-around items-center'>
    <p>{product.quantity}</p>
    <div>
        <button onClick={()=>{
            dispatch(incrementQnty(product.id))
        }} className="cursor-pointer block"><i class="fa-solid fa-chevron-up"></i></button>
        <button onClick={()=>{
            dispatch(decrementQnty(product.id))
        }}  className="cursor-pointer block"><i class="fa-solid fa-chevron-down"></i></button>
    </div>
    </div>
     <p>{(product.quantity * product.price).toFixed(2)}</p>
    </div>
    ))}

     <div className='bg-white p-3 mb-15 flex justify-between'>
      <button onClick={()=>{
        navigate("/home");
      }} className="border-2 px-10 py-3 rounded-[4px] border-gray-500 hover:bg-black hover:text-white ease-in duration-150 cursor-pointer">Return To Shop</button>

       <button className="border-2 px-10 py-3 rounded-[4px] border-gray-500 hover:bg-black hover:text-white ease-in duration-150 cursor-pointer">Update cart</button>
    </div>

    <div className='flex mb-60'>
        <div className="mt-10 w-full flex flex-wrap gap-5 lg:flex-nowrap">
     <input type="text" id="coupon" class="bg-white w-[255px] h-[56px]  mr-5 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 inline-block" placeholder='Coupon Code' />
     <button className="text-white text-center  bg-[#DB4444] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  rounded-[4px] p-y-[16px] p-x-[48px] text-sm w-[211px] h-[56px]  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-block mb-5">Apply Coupon</button>
  </div>

  <div className="border-2 p-5 w-[470px] h-[324px]">
    <p className="mb-4">Cart Total</p>
    <div className="border-b-2 mb-3 flex py-5 justify-between">
            <span >Subtotal:</span>
            <span >${totalPrice.toFixed(2)}</span>
        </div>
        <div className="border-b-2 mb-3 flex py-5 justify-between">
            <span >Shipping:</span>
            <span >Free</span>
        </div>
        <div className="flex justify-between mb-4">
            <span >Total:</span>
            <span >${totalPrice.toFixed(2)}</span>
        </div>

        <div className="text-center">
            <button onClick={()=>{
                navigate("/checkout")
            }} className="text-white cursor-pointer bg-[#DB4444] hover:bg-red-800 px-10 py-2 rounded">Process to Checkout</button>
        </div>
  </div>
    </div>


   </div>
   </>
  )
}

export default Cart
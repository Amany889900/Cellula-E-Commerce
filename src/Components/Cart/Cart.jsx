import React from 'react'


import { useSelector, useDispatch } from 'react-redux'
import joyStick from "./../../assets/Images/joyStick.png"
import { decrementQnty, incrementQnty, removeFromCart } from '../../Store/Slices/CartSlice';
function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch()
  return (
   <>
   <div className='w-[80%] mx-auto mt-60'>
    <div className='bg-white p-3 mb-15 border-3 border-white shadow-2xl shadow-gray-300 flex justify-between'>
     <p>Product</p>
     <p>Price</p>
     <p>Quantity</p>
     <p>Subtotal</p>
    </div>
     <div className='bg-white p-3 mb-15 border-3 group relative border-white shadow-2xl shadow-gray-300 flex justify-between'>
     <button onClick={()=>{
        dispatch(removeFromCart(product.id))
     }} className='cursor-pointer absolute duration-300 ease-in invisible left-1.5 top-1.5 group-hover:visible '><i class="fa-solid fa-circle-xmark text-red-700"></i></button>
     <div className="flex justify-between items-center">
        <img src={joyStick} alt="" className='w-[54px] h-[54px] mr-5' />
        <p>LCD Monitor</p>
     </div>
     <p>$650</p>
    <div className='relative border rounded w-[72px] h-[44px] flex justify-around items-center'>
    <p>01</p>
    <div>
        <button onClick={()=>{
            dispatch(incrementQnty(product.id))
        }} className="cursor-pointer block"><i class="fa-solid fa-chevron-up"></i></button>
        <button onClick={()=>{
            dispatch(decrementQnty(product.id))
        }}  className="cursor-pointer block"><i class="fa-solid fa-chevron-down"></i></button>
    </div>
    </div>
     <p>$650</p>
    </div>
   </div>
   </>
  )
}

export default Cart
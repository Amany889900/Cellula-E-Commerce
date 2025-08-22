import React from 'react'
import InputField from '../InputField/InputField'
import joyStick from "./../../assets/Images/joyStick.png"
import { useSelector } from 'react-redux';


function Checkout() {
    const checkoutData = [
        {for:"firstName",id:"firstName",isRequired:true,type:"text",label:"First Name"},
        {for:"companyName",id:"companyName",type:"text",label:"Company Name"},
        {for:"streetAddress",id:"streetAddress",isRequired:true,type:"text",label:"Street Address"},
        {for:"floor",id:"floor",type:"text",label:"Apartment, floor, etc.(optional)"},
        {for:"city",id:"city",isRequired:true,type:"text",label:"Town/City"},
        {for:"phone",id:"phone",isRequired:true,type:"tel",label:"Phone Number"},
        {for:"email",id:"email",isRequired:true,type:"email",label:"Email Address"},
    ]

  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
   <>
    <div className='w-[80%] mx-auto flex lg:flex-row lg:justify-between mt-60 mb-60 flex-col items-center'>
       <div className='w-[40%]'>
         <div>{checkoutData.map((input,idx)=>(
           <InputField key={idx} for={input["for"]} id={input["id"]} isRequired={input["isRequired"]} type={input["type"]} label={input["label"]}/>
        ))}</div>
         <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Save this information for faster check-out next time</label>
  </div>
       </div>

       <div className="w-[40%]">
        <div className="flex justify-between items-center mb-10">
            <div className="flex items-center">
                 <img src={joyStick} alt="joyStick" className="w-[54px] h-[54px] mr-10"/>
                 <span>LCD Monitor</span>
            </div>
            <span>$650</span>
        </div>
        <div className="border-b-2 mb-10 flex py-5 justify-between">
            <span >Subtotal:</span>
            <span >${totalPrice.toFixed(2)}</span>
        </div>
        <div className="border-b-2 mb-10 flex py-5 justify-between">
            <span >Shipping:</span>
            <span >Free</span>
        </div>
        <div className="flex justify-between">
            <span >Total:</span>
            <span >${totalPrice.toFixed(2)}</span>
        </div>
        <fieldset className="mt-15">
  <legend class="sr-only">Payment method</legend>

  <div class="flex items-center mb-4">
    <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="country-option-1" class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
     Bank
    </label>
  </div>

  <div class="flex items-center mb-4">
    <input id="country-option-2" type="radio" name="countries" value="Germany" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
    <label for="country-option-2" class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      Cash on delivery
    </label>
  </div>

  <div className="mt-10 w-full flex flex-wrap gap-5 lg:flex-nowrap">
     <input type="text" id="coupon" class="bg-white w-[255px] h-[56px]  mr-5 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 inline-block" placeholder='Coupon Code' />
     <button className="text-white text-center  bg-[#DB4444] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  rounded-[4px] p-y-[16px] p-x-[48px] text-sm w-[211px] h-[56px]  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-block mb-5">Apply Coupon</button>
  </div>

     <button className="text-white mt-10 text-center bg-[#DB4444] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  rounded-[4px] p-y-[16px] p-x-[48px] text-sm w-[211px] h-[56px]  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-block  mb-5">Place Order</button>



</fieldset>
        
       </div>

       
    </div>
   </>
  )
}

export default Checkout
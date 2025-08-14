import React from 'react'
import registrationImg from "./../../assets/Images/registration.png"
import { NavLink } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"

import * as z from "zod"; 
 


function EditProfile() {

  const UserSchema = z.object({ 
//   username: z.string().min(1,"Username is required").max(8,"Username must not be more than 8 characters"),
//   email: z.string().email("The email is invalid"),
  currentPassword:z.string().regex(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
  "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
),
  newPassword:z.string().regex(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
  "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
),
  cNewPassword: z.string()
}) .refine((data) => data.newPassword === data.cNewPassword, {
    message: "Passwords don't match",
    path: ["cNewPassword"], // path of error
  });

const { register, handleSubmit,  formState: { errors }, } = useForm({
    resolver: zodResolver(UserSchema),
  })

  return (
    <div className='w-[80%] mx-auto'>
        <div className='flex justify-around gap-40 mt-50 mb-50'>
      <div className='w-[1/3] sm:w-[1/2]'>
      <ul>
        <li className='font-medium text-[16px] leading-[24px] mb-[8px]'>Manage My Account
            <ul>
                <li className='font-normal mb-[8px] text-[16px] leading-[24px] text-[#DB4444] indent-8'>My profile</li>
                <li className='font-normal mb-[8px] text-[16px] leading-[24px] indent-8 text-gray-500'>Address Book</li>
                <li className='font-normal mb-[8px] text-[16px] leading-[24px] indent-8 text-gray-500'>My Payment Options</li>
            </ul>
        </li>
        <li className='font-medium text-[16px] leading-[24px]'>My Orders
             <ul>
                <li className='font-normal mb-[8px] text-[16px] leading-[24px] indent-8 text-gray-500'>My returns</li>
                <li className='font-normal mb-[8px] text-[16px] leading-[24px] indent-8 text-gray-500'>My cancellations</li>
            </ul>
        </li>
        <li className='font-medium text-[16px] leading-[24px]'>My WishList</li>
        <li></li>
        <li></li>
        </ul>
      </div>
      <div className='w-[2/3] sm:w-[1/2] self-center border-1 border-white shadow-2xl shadow-gray-400 p-10 lg:w-[870px] lg:h-[630px]'>
            
<h2 className="font-medium  mb-3 text-[20px] text-[#DB4444] leading-[28px]">Edit Your Profile</h2>
<h6 className='mb-8'>Enter your details below</h6>
<form class="w-full"  onSubmit={handleSubmit((data) => {
        // handle inputs
        console.log(data)
      })}>
        <div className='flex justify-between'>
            <div class="mb-5 w-[49%] ">
    <input type="password" id="userName"   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Amany Ehab' disabled />
  </div>
  <div class="mb-5 w-[49%]">
    <input type="password" id="email"   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='2100448@eng.asu.edu.eg' disabled />
  </div>
        </div>
  

<h2 className="font-medium  mb-3 text-[20px] leading-[28px]">Password Changes</h2>
   <div class="mb-5">
    <input type="password" id="currentPassword"  {...register("currentPassword")} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Current Password'/>
  </div>
  {errors.currentPassword && <p className="text-red-500 text-sm mt-1 max-w-xs break-words">{errors.currentPassword.message}</p>}
   <div class="mb-5">
    <input type="password" id="newPassword"  {...register("newPassword")} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='New Password'/>
  </div>
  {errors.newPassword && <p className="text-red-500 text-sm mt-1 max-w-xs break-words">{errors.newPassword.message}</p>}
   <div class="mb-5">
    <input type="password" id="cNewPassword"  {...register("cNewPassword")} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Confirm Password'/>
  </div>
  {errors.cNewPassword && <p className="text-red-500 text-sm mt-1 max-w-xs break-words">{errors.cNewPassword.message}</p>}
   
    
    <div className='flex justify-end'>
         <button className="mr-5">Cancel</button>
         <button type="submit" className="text-white bg-[#DB4444] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  rounded-[4px] p-y-[16px] p-x-[48px] text-sm w-[143px] h-[56px]  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save changes</button>
    </div>
    
     
</form>

      </div>
    </div>
    </div>
  )
}

export default EditProfile
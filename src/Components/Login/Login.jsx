import React from 'react'
import registrationImg from "./../../assets/Images/registration.png"
import { NavLink } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"

import * as z from "zod"; 
import axios from 'axios';

function Login() { //////// 401 UNAUTHORIZED
  const UserSchema = z.object({ 
    username: z.string().min(1,"Username is required").max(8,"Username must not be more than 8 characters"),
    password:z.string().regex(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
  ),
  })

  const { register, handleSubmit,  formState: { errors }, } = useForm({
      resolver: zodResolver(UserSchema),
    })

   

    async function login (data){
       try{
         return await axios.post("https://fakestoreapi.com/auth/login",data)
       }catch(error){
         return error.message;
       }
    }
  return (
    <div className='flex gap-40 mt-40 mb-50'>
      <div className='w-[1/3] sm:w-[1/2]'>
      <img src={registrationImg} alt="mobile" className='w-full h-[781px]' />
      </div>
      <div className='w-[2/3] sm:w-[1/2] self-center'>
            
<h2 className="text-2xl font-medium tracking-[4%] mb-3 text-[36px]">Login to Exclusive</h2>
<h6 className='mb-8'>Enter your details below</h6>
<form className="w-full" onSubmit={handleSubmit(login)}>
  
  <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_name" {...register("username")} id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
      <label for="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
  </div>
  {errors.username && <p className="text-red-500 text-sm mt-1 max-w-xs break-words">{errors.username.message}</p>}
  <div class="relative z-0 w-full mb-5 group">
      <input type="password" name="floating_password"  {...register("password")} id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  {errors.password && <p className="text-red-500 text-sm mt-1 max-w-xs break-words">{errors.password.message}</p>}
  
  
  <button type="submit" className="text-white bg-[#DB4444] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  rounded-[4px] p-y-[16px] p-x-[48px] text-sm w-[143px] h-[56px]  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-10">Login</button>
  <NavLink className="text-[#DB4444]">Forget Password?</NavLink>
  
 
</form>

      </div>
    </div>
  )
}

export default Login
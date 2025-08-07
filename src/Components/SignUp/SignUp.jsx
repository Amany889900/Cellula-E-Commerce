import React from 'react'
import registrationImg from "./../../assets/Images/registration.png"
import { NavLink } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"

import * as z from "zod"; 
 


function SignUp() {

  const UserSchema = z.object({ 
  username: z.string().min(1,"Username is required").max(8,"Username must not be more than 8 characters"),
  email: z.string().email("The email is invalid"),
  password:z.string().regex(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
  "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
),
  cPassword: z.string()
}) .refine((data) => data.password === data.cPassword, {
    message: "Passwords don't match",
    path: ["cPassword"], // path of error
  });

const { register, handleSubmit,  formState: { errors }, } = useForm({
    resolver: zodResolver(UserSchema),
  })

  return (
    <div className='flex gap-40 mt-40 mb-50'>
      <div className='w-[1/3] sm:w-[1/2]'>
      <img src={registrationImg} alt="mobile" className='w-full h-[781px]' />
      </div>
      <div className='w-[2/3] sm:w-[1/2] self-center'>
            
<h2 className="text-2xl font-medium tracking-[4%] mb-3 text-[36px]">Create an account</h2>
<h6 className='mb-8'>Enter your details below</h6>
<form class="w-full"  onSubmit={handleSubmit((data) => {
        // handle inputs
        console.log(data)
      })}>
  <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_name" {...register("username")} id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
      <label for="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
  </div>
  {errors.username && <p className="text-red-500 text-sm mt-1 max-w-xs break-words">{errors.username.message}</p>}
  <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email"  {...register("email")} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
  </div>
  {errors.email && <p className="text-red-500 text-sm mt-1 max-w-xs break-words">{errors.email.message}</p>}
  <div class="relative z-0 w-full mb-5 group">
      <input type="password" name="floating_password"  {...register("password")} id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  {errors.password && <p className="text-red-500 text-sm mt-1 max-w-xs break-words">{errors.password.message}</p>}
   <div className={`relative z-0 w-full group ${errors.cPassword ? 'mb-5' : 'mb-10'}`}>
      <input type="password" name="repeat_password"  {...register("cPassword")} id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div>
  {errors.cPassword && <p className="text-red-500 text-sm mt-1 max-w-xs break-words mb-10">{errors.cPassword.message}</p>}
  
  
  <button type="submit" class="text-white bg-[#DB4444] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  rounded-[4px] p-y-[16px] p-x-[122px] text-sm w-[370px] h-[56px]  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 block mb-10">Create Account</button>
  <div className='relative'>
    <span className=" absolute inset-y-0 left-0 pl-10  flex items-center"><i className="fa-brands fa-google text-2xl "></i></span>
     <button class="text-black border-1 bg-white hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[4px] p-y-[16px] p-x-[122px] text-sm w-[370px] h-[56px]  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 block">Sign up with Google</button>
  </div>

  <span className="text-center block mt-8">Already have account? <NavLink to="/login" className="underline">Log in</NavLink></span>
 
</form>

      </div>
    </div>
  )
}

export default SignUp
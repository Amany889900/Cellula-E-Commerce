import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "flowbite-react";
import MainLayout from './Components/MainLayout/MainLayout';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Error from './Components/Error/Error';
import {createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import CategoryDetails from './Components/CategoryDetails/CategoryDetails';
import ProductsContextProvider from './Context/ProductsContext';
import ProductDetails from './ProductDetails/ProductDetails';
import WishListContextProvider, { WishListContext } from './Context/WishListContext';
import EditProfile from './Components/EditProfile/EditProfile';
import Wishlist from './Components/Wishlist/Wishlist';
import Checkout from './Components/Checkout/Checkout';


function App() {
    
    const router = createHashRouter([
    {path:"",element:<MainLayout/>,children:[
      {path:"/login",element:<Login/>},
      {path:"/signup",element:<SignUp/>},
      {path:"/home",element:<Home/>},
      {path:"/contact",element:<Contact/>},
      {path:"/about",element:<About/>},
      {path:"/categoryDetails/:categoryName",element:<CategoryDetails/>},
      {path:"/productDetails/:id",element:<ProductDetails/>},
      {path:"/editProfile",element:<EditProfile/>},
      {path:"/wishlist",element:<Wishlist/>},
      {path:"/checkout",element:<Checkout/>},
      {path:"*",element:<Error/>},
    ]
    }
   ])
  return (
    <>
    <ProductsContextProvider>
      <WishListContextProvider>
      <RouterProvider router={router} />
      </WishListContextProvider>
    </ProductsContextProvider>
    </>
  )
}

export default App

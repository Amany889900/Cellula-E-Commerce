import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./Slices/CartSlice.js";

export const store = configureStore({
   reducer:{
    cart:cartReducer
   }
})
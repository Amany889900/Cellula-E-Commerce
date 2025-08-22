import { createSlice } from "@reduxjs/toolkit";
const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
const savedTotal = JSON.parse(localStorage.getItem("total")) || 0;

const initialState = {
    cartItems:savedCart,
    totalQuantity:0,
    totalPrice:savedTotal
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const product = action.payload;

            const existingProduct = state.cartItems.find((elem)=>elem.id == product.id);

            if(existingProduct){
                existingProduct.quantity+=1
            }else{
                state.cartItems.push({...product,quantity:1})
            }

             state.totalQuantity += 1;
             state.totalPrice += product.price;

        },
        removeFromCart:(state,action)=>{
            const productId = action.payload;
            const product = state.cartItems.find((elem)=>elem.id == productId);
            if(product){
               state.totalQuantity-=product.quantity;
               state.totalPrice-= product.price * product.quantity;
               state.cartItems = state.cartItems.filter((elem)=>(elem.id!=productId));
            }
        },
        incrementQnty:(state,action)=>{
            const productId = action.payload;
            const product = state.cartItems.find((elem)=>elem.id == productId);
            if(product){
               state.totalQuantity+=1;
               state.totalPrice+=product.price;
               product.quantity+=1;
            }
        },
        decrementQnty:(state,action)=>{
            const productId = action.payload;
            const product = state.cartItems.find((elem)=>elem.id == productId);
            if(product && product.quantity>1){
               state.totalQuantity-=1;
               state.totalPrice-=product.price;
               product.quantity-=1;
            }
        },
        clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
    }
})

export const {addToCart,removeFromCart,incrementQnty,decrementQnty,clearCart} = cartSlice.actions;

export default cartSlice.reducer;
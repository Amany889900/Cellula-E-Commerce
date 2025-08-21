import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems:[],
    totalQuantity:0,
    totalPrice:0
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const product = action.payload;

            const existingProduct = cartItems.find((elem)=>elem.id == product.id);

            if(existingProduct){
                state.quantity+=1
            }else{
                cartItems.push({...product,quantity:1})
            }

             state.totalQuantity += 1;
             state.totalAmount += product.price;

        },
        removeFromCart:(state,action)=>{
            const productId = action.payload;
            const product = state.cartItems.find((elem)=>elem.id == productId);
            if(product){
               state.totalQuantity-=product.quantity;
               state.totalPrice-= product.price * product.quantity;
               state.cartItems = state.cartItems.filter((elem)=>{elem.id!=productId});
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
      state.totalAmount = 0;
    },
    }
})

export const {addToCart,removeFromCart,incrementQnty,decrementQnty,clearCart} = cartSlice.actions;

export default cartSlice.reducer;
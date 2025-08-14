import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"

export const WishListContext = createContext();

const WishListContextProvider = ({children})=>{

    const [wishProducts,setWishProducts] = useState([]);

    useEffect(function(){
    if(localStorage.getItem("wishProducts")!=null){
        setWishProducts(JSON.parse(localStorage.getItem("wishProducts")));
    }else{
        setWishProducts([])
    }
  },[]);


   async function addToWishlist(productId){
          try{
            const {data} = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            if(localStorage.getItem("wishProducts")!=null){
              const currentArr = JSON.parse(localStorage.getItem("wishProducts"));
              const wishArr = [...currentArr,data];
              localStorage.setItem("wishProducts",JSON.stringify(wishArr));
              setWishProducts(wishArr);
            }else{
              localStorage.setItem("wishProducts",JSON.stringify([data]));
              setWishProducts([data]);
            }
            console.log("added..!!",localStorage.getItem("wishProducts"));
          }catch(err){
            console.log(err,"Error from addToWishlist function in ProductsContext");
          }
   }

   async function removeFromWishlist(productId){
      try{
             const wishArr = JSON.parse(localStorage.getItem("wishProducts")).filter((elem)=>{
                 return elem.id != productId;
              });
              localStorage.setItem("wishProducts",JSON.stringify(wishArr));
              setWishProducts(wishArr);
              console.log("removed..!!",localStorage.getItem("wishProducts"));
          }catch(err){
            console.log(err,"Error from removeFromWishlist function in ProductsContext");
          }
   }

  


    return(
        <WishListContext.Provider value={
            {
              addToWishlist,
              wishProducts,
              setWishProducts,
              removeFromWishlist
            }
        }>
            {children}
        </WishListContext.Provider>
    )
}

export default WishListContextProvider
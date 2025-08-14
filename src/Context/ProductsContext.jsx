import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"

export const ProductsContext = createContext();

const ProductsContextProvider = ({children})=>{

    const [products,setProducts] = useState([]);
    const [filteredByCategoryProducts,setFilteredByCategoryProducts] = useState([]);


   async function getAllProducts (){
    try{
     const data = await axios.get("https://fakestoreapi.com/products");
     setProducts(data.data);
    }catch(err){
        console.log(err,"Error from getAllProducts function in ProductsContext")
    }
   }

   async function filterProducts(field,val) {
       try{
          await getAllProducts();

          const data = products?.filter((ele)=>{
             return ele[field].toLowerCase() == val.toLowerCase()
        })
      setFilteredByCategoryProducts(data);
       }catch(err){
        console.log(err,"Error from filterProducts function in ProductsContext")
         
       }
   }


    return(
        <ProductsContext.Provider value={
            {
              getAllProducts,
              products,
              setProducts,
              filterProducts,
              filteredByCategoryProducts,
              setFilteredByCategoryProducts
            }
        }>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider 
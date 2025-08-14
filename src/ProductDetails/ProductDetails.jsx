import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"

function ProductDetails() {
  const {id} = useParams();
  const [productDetails,setProductDetails] = useState({});
  
  
   useEffect(() => {
    async function getProduct() {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
        // console.log(data.id)
        setProductDetails(data);
      } catch (err) {
        console.log(err, "Error from getProduct in productDetails page");
      }
    }
    getProduct();
  }, [id]);

  return (
   <>
   
   </>
  )
}

export default ProductDetails
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {ProductsContext} from '../../Context/ProductsContext';

function CategoryDetails() {
const {categoryName} = useParams();
const {filterProducts} = useContext(ProductsContext);
const [filteredProducts,setFilteredProducts] = useState([]);

useEffect(() => {
  (async () => {
    const res = await filterProducts("category", categoryName);
    setFilteredProducts(res);
    // console.log(filterProducts);
  })();
}, [categoryName]); 


  return (
    <>
    <div className="w-[80%] mx-auto px-10 py-10 mt-20 mb-40 relative border-b-1">
    <span className="text-[#DB4444] text-[16px] font-bold  leading-[20px] mt-10 mb-4 before:inline-block before:rounded-[4px] before:w-[20px] before:h-[40px] before:bg-[#DB4444] before:content-[''] before:mr-4 inline-flex items-center">{categoryName}</span>
    <h2 className="font-semibold text-[24px] sm:text-[36px] leading-[48px] tracking-[4%] mb-14">{categoryName}</h2>
   <div className="mb-20">
   
     <div className="flex flex-wrap">
     {filteredProducts?.map((product,idx)=>(

        <div className='w-full sm:w-1/2 md:w-1/4' key={idx}> 
         <Link to={`/productDetails/${product.id}`}>
           <div className="relative p-5 mt-10 bg-[#F5F5F5] w-[270px] flex flex-col gap-3 items-center">
                    
    <div className="w-[190px] h-[180px] mt-10 "><img src={product.image} alt="" className="w-full h-full" /></div>

    <div className="absolute right-0 mr-2 top-[12px]">
      <button className="bg-white w-[36px] h-[36px] rounded-full flex justify-center items-center mb-4"><i className="fa-regular fa-heart"></i></button>
      <button className="bg-white w-[36px] h-[36px] rounded-full flex justify-center items-center"><i className="fa-regular fa-eye"></i></button>
    </div>
  </div>
  <h4 className="font-medium text-[16px] leading-[24px] mt-4">{product.title.slice(0,54)}</h4>
  <span className="text-[#DB4444] mr-4 font-bold inline-block mb-1">{product.price}</span>
  {/* {product.oPrice?<span className="text-gray-400 line-through inline-block mb-1">{product.oPrice}</span>:""} */}
  <div className="flex">
    <div>
    <i className="fa-solid fa-star mr-1 text-yellow-300"></i>
    <i className="fa-solid fa-star mr-1 text-yellow-300"></i>
    <i className="fa-solid fa-star mr-1 text-yellow-300"></i>
    <i className="fa-solid fa-star mr-1 text-yellow-300"></i>
    <i className="fa-solid fa-star mr-3 text-yellow-300"></i>
  </div>
   <p className="text-gray-400">({product.rating.count})</p>
  </div> 
         </Link>
     </div>
       
    

     
     ))}
     </div>   
   </div>
 
  
 

  </div>
    </>
  )
}

export default CategoryDetails
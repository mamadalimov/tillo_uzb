import React from "react";
import Skeleton from "../skeleton/Skeleton";
import { PRODUCTS } from "../../static";
import "./Products.css";
import ProductWrapper from "../product-wrapper/ProductWrapper";
import { db } from "../../server";
import { collection,getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";




function Products() {

  
  const [data, setData] = useState([])
  const productRef = collection(db, "products")
  useEffect(()=>{
   const getProducts = async ()=>{
    const fetchData = await getDocs(productRef)
    setData(fetchData.docs.map((item =>({id: item.id, ...item.data()}))))
   }
   getProducts()
  }, [])
  

  return (
    <div className="container">
      <h2>Products</h2>
      {
        data.length ?
        <ProductWrapper data={data}/> :
        <Skeleton />
      }
      
    </div>
  );
}

export default Products;

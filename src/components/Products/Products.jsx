import React, { useEffect, useState } from "react";
import style from "../Products/style.module.css"
import Product from "./Product/Product";

// eve.holt@reqres.in

const Products = () => {
  const [ data, setData] = useState([])
  const [count ,setCount] = useState(0)

  useEffect(()=>{
 
    const getData = async ()=>{
         let res = await fetch("http://localhost:8080/products")
         let data = await res.json()
           console.log(data)  
           setData(data)
    }
   getData()
  
  },[])
  return <div >
         <Product data= {data}/>

  </div>;
};

export default Products;

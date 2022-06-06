import React, { useEffect, useState } from "react";
import style from "../style.module.css"




const Product = () => {
  // Note: this id should come from api
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

const removeData = (id)=>{
const   nyaData = data.filter((el) => el.id !== id)
   setData(nyaData)
}


const  AddData =  (id)=>{
  const nyaData = data.filter((el)=>el.id === id)
  
}

  const product = { id: 1 };
  return (

    <div className={style.produts}>
  {data.map((el)=>{
    return   <div data-cy={`product-${product.id}` } key={el.id}>
    <h3 data-cy="product-name"> {el.name}</h3>
    <h6 data-cy="product-description">{el.description}</h6>
    <button data-cy="product-add-item-to-cart-button" onClick={()=>AddData(el.id)}>AddTo Cart</button>
    <div>
      <button data-cy="product-increment-cart-item-count-button"  onClick={()=>setCount(count+1)} >+</button>
      <span data-cy="product-count">
        {
          // Count here from CartItems
          count
        }
      </span>
      <button data-cy="product-decrement-cart-item-count-button"  
        onClick={()=>{
          if(count >0){
            setCount(count-1)
          }
          }

        }
          
       >-</button>
      <button data-cy="product-remove-cart-item-button" onClick={() => removeData(el.id)} >Remove Item</button>
    </div>
  </div>
  })}
   
   

    </div>
  );
};

export default Product;

import Product from './Product.js';

import React from 'react'

export default function ProductList(props) {
  
  return (
    props.productList.length>0?
    props.productList.map((product, i)=>{
        return <Product product = {product} key ={i} index={i}  
        incrementQuantity= {props.incrementQuantity}
        decrementQuantity= {props.decrementQuantity} 
        removeItem= {props.removeItem}/>
    })
    : <h1> No Items Add Some</h1>
  )
}

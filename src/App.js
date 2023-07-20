import './App.css';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import ProductList from './components/ProductList.js';
import React, { useState } from 'react';
import Footer from './components/Footer';
import AddItem from './components/AddItem';


function App() {

  let products = [
    {
      name: "iphone 13 ",
      price: 9999,
      quantity: 0,
    },
    {
      name: "redmi 5",
      price: 9999,
      quantity: 0,
    }
  ]

  let [productList, setProductList] = useState(products)
  let [totalAmount, settotalAmount] = useState(0)
  let incrementQuantity = (index) => {
    let newproductList = [...productList]
    let newTotalAmount = totalAmount;
    newproductList[index].quantity++;
    newTotalAmount += newproductList[index].price
    settotalAmount(newTotalAmount);
    setProductList(newproductList);
  }
  let decrementQuantity = (index) => {
    let newproductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newproductList[index].quantity > 0) {
      newproductList[index].quantity--
      newTotalAmount -= newproductList[index].price

    }
    settotalAmount(newTotalAmount);
    setProductList(newproductList);
  };
  let resetData = () => {
    let newproductList = [...productList];
    newproductList.map((products) => {
      products.quantity = 0;
    })
    setProductList(newproductList);
    settotalAmount(0);

  }
  const removeItem = (index) => {
    let newproductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newproductList[index].quantity * newproductList[index].price;
    newproductList.splice(index, 1);
    settotalAmount(newTotalAmount);
    setProductList(newproductList);
  }
  const addItem=(name, price)=>{
      let newproductList= [...productList]
      newproductList.push({
        name:name,
        price:price,
        quantity:0
      });
      setProductList(newproductList)
  }
  return (
    <>
      <Navbar />
      <main className="container">
        <AddItem addItem= {addItem}/>
        <ProductList productList={productList} 
        incrementQuantity={incrementQuantity} 
        decrementQuantity={decrementQuantity} 
        removeItem= {removeItem}/>
      </main>
      <Footer totalAmount={totalAmount} resetData={resetData} />

    </>
  );
}
export default App;

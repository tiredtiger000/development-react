import React, { useState } from 'react';
import './App.css';
import foodData from "./assets/kfood-data.json";
import { Layout } from 'antd';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import {Row, Col, Divider} from 'antd';
const {Sider} = Layout;

document.body.style.backgroundColor = "antiquewhite";
function App() {
  const [foodList, setList] = useState(foodData)
  function updateFoodList(updatedList){
    setList([...updatedList])
  }
  const [cartItems, setCartItems] = useState([])

  function updateCart(item) {
    setCartItems([...cartItems, item])
  }
  function grandTotal(items) {
    const myPrices = items.map(item => item.price)
    const sum = myPrices.reduce((price, item) => price + item, 0)
    return sum
  }

  return (
    <div className="App">
      <Header></Header>
      <Row gutter={[1,10]}>
        <Col xs={25} md={16}>
          <Row gutter={[8,15]}>
            <Divider></Divider>
            {foodList.map((item) => (<Main foodItem = {item} addToCart={updateCart}></Main>))}
          </Row>
        </Col>
        <Col xs={25} md={5} offset={2}>
          <Basket foodData={foodData} updateFoodList={updateFoodList}> </Basket>
          <h3>My Cart</h3>
          {cartItems.map((item) => (<p>{item.name} ${item.price}</p>))}
          <h4>Grand Total: ${grandTotal(cartItems)}</h4>
        </Col>
      </Row>
    </div>
  );
}
export default App;

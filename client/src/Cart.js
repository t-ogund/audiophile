import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from "react-router-dom";
import CartItem from "./CartItem";

function Cart(props) {
   console.log(props)

  let [ cartArray, setCartArray ] = useState([]);
  let [ itemInput, setItemInput ] = useState(0);
  let [ cartLength, setCartLength ] = useState(0);
  let [ cartItemCount, setCartItemCount ] = useState(0);
  let [ increaseItem, setIncreaseItem ] = useState({})

  useEffect(() => {
      setCartArray(
          JSON.parse(localStorage.getItem("cart"))
      )
        console.log('testing cart array', cartArray, typeof cartArray)
  }, [ increaseItem ])

  // useEffect(() => {
  //   setCartLength(cartLength)
  // }, [])

  console.log('cart array from cart', cartArray)


  function removeAll() {
      setCartArray(
          JSON.parse(localStorage.getItem("cart"))
      )

      setCartArray(
          cartArray = []
      )
      localStorage.clear()
  }

  props.passCartProp(cartArray);

  function increaseCartItem(x, y) {
        console.log('chacha')
        console.log('x', x, y)
        setCartItemCount(x)
        setIncreaseItem(
            increaseItem = {},
            increaseItem.name = y.cartItemInfo,
            increaseItem.quantity = y.cartItemQuantity + 1,
            increaseItem.price = y.cartItemPrice,
            increaseItem.slug = y.slug
        )
        console.log("item to update", increaseItem)
        const items = JSON.parse(localStorage.getItem("cart"))
        console.log(items)
        for (let i = 0; i < items.length; i++) {
            if (items[i].name === increaseItem.name) {
                items.splice(i, 1, increaseItem)
            }
        }
        console.log("should be updated list", items)
        setCartArray(
            localStorage.setItem("cart", JSON.stringify(items))
        )
        console.log('cartArray', cartArray)
    }
  

    
    return(
        <>
            <Row>
                <Col style={{ backgroundColor: 'blue'}} xs={12} className="d-flex justify-content-between">
                    {/* <h5>Cart ({props.cartArray === undefined ? 0 : props.cartArray.length})</h5> */}
                    <Button onClick={removeAll}>Remove All</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    {
                        cartArray && cartArray.map(item => {
                            return <CartItem increaseCartItem={increaseCartItem} cartItemInfo={item.name} cartItemQuantity={item.quantity} cartItemPrice={item.price} slug={item.slug} />
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col style={{ backgroundColor: 'red'}} xs={12} className="d-flex justify-content-between">
                    <p>
                        Total
                    </p>
                    <p>
                            {
                                cartArray && cartArray.map(item => {
                                    let totalQuantity = item.quantity
                                    let totalPrice = totalQuantity * item.price
                                        return totalQuantity + totalPrice
                                })
                                .reduce((acc, currentValue) => {
                                    return acc + currentValue
                                }, 0)
                            }
                    </p>
                </Col>
            </Row>
        </>
    )
}

export default Cart
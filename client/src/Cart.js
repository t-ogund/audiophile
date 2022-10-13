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
//    console.log(props)

  let [ cartArray, setCartArray ] = useState([]);
  let [ itemInput, setItemInput ] = useState(0);
  let [ cartLength, setCartLength ] = useState(0);
  let [ cartItemCount, setCartItemCount ] = useState(0);
  let [ increaseItem, setIncreaseItem ] = useState({});
  let [ decreaseItem, setDecreaseItem ] = useState({});

  useEffect(() => {
      setCartArray(
          JSON.parse(localStorage.getItem("cart"))
      )
        // console.log('testing cart array', cartArray, typeof cartArray)
  }, [ increaseItem, decreaseItem ])

  function removeAll() {
    // console.log('haha')
      setCartArray(
          JSON.parse(localStorage.getItem("cart"))
      )

    //   setCartArray(
    //       cartArray = []
    //   )
      setCartArray(
        cartArray = localStorage.clear()
      )
    //   console.log('remove all cart array', cartArray)
  }

  props.passCartProp(cartArray);
// console.log(cartArray)
  function increaseCartItem(x, y) {
        setCartItemCount(x)
        setIncreaseItem(
            increaseItem = {},
            increaseItem.name = y.cartItemInfo,
            increaseItem.quantity = y.cartItemQuantity + 1,
            increaseItem.price = y.cartItemPrice,
            increaseItem.slug = y.slug
        )
        const items = JSON.parse(localStorage.getItem("cart"))

        for (let i = 0; i < items.length; i++) {
            if (items[i].name === increaseItem.name) {
                items.splice(i, 1, increaseItem)
            }
        }

        setCartArray(
            localStorage.setItem("cart", JSON.stringify(items))
        )
    }

    function decreaseCartItem(x, y) {
        setCartItemCount(x)
        setDecreaseItem(
            decreaseItem = {},
            decreaseItem.name = y.cartItemInfo,
            decreaseItem.quantity = y.cartItemQuantity - 1,
            decreaseItem.price = y.cartItemPrice,
            decreaseItem.slug = y.slug
        )
        // console.log('cart item count', cartItemCount)
        // const subItems = JSON.parse(localStorage.getItem("cart"))
        setCartArray(
            JSON.parse(localStorage.getItem("cart"))
        )
        // console.log('initial set cart array', cartArray)

        for (let i = 0; i < cartArray.length; i++) {
            if (cartArray[i].name === decreaseItem.name) {
            cartArray.splice(i, 1, decreaseItem)
            setCartArray(
                JSON.parse(localStorage.getItem("cart"))
            )
            // console.log('getting cart array', cartArray)
            cartArray = cartArray.filter(item => item.quantity !== 0)
            setCartArray(
                localStorage.setItem("cart", JSON.stringify(cartArray))
            )
            }
            // console.log('loop cartArray', cartArray)
        }
    }
  

    
    return(
        <>
            <Row>
                <Col style={{ backgroundColor: 'blue'}} xs={12} className="d-flex justify-content-between">
                    <h5>Cart ({cartArray === [] || cartArray === null || cartArray === undefined ? 0 : cartArray.length})</h5>
                    <Button onClick={removeAll}>Remove All</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    {
                        cartArray && cartArray.map((item, index) => {
                            if (item.quantity === 0) {
                                cartArray.filter(item => item.quantity > 0)
                            } else {
                                return <CartItem increaseCartItem={increaseCartItem} decreaseCartItem={decreaseCartItem} cartItemInfo={item.name} cartItemQuantity={item.quantity} cartItemPrice={item.price} slug={item.slug} />
                            }
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
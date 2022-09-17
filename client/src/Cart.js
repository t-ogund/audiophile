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
    let [ cartArray, setCartArray ] = useState([])
    let [ itemInput, setItemInput ] = useState(0);

    console.log('cart props', props)
    console.log('test')

    useEffect(() => {
        setCartArray(
            JSON.parse(localStorage.getItem("cart"))
        )
    }, [])
    console.log("CART ARRAY:", cartArray)

    function removeAll() {
        setCartArray(
            JSON.parse(localStorage.getItem("cart"))
        )
 
        setCartArray(
            cartArray = []
        )
        localStorage.clear()
    }
    
    return(
        <>
            <Row>
                <Col style={{ backgroundColor: 'blue'}} xs={12} className="d-flex justify-content-between">
                    <h5>Cart ({props.cartArray === undefined ? 0 : props.cartArray.length})</h5>
                    <Button onClick={removeAll}>Remove All</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    {
                        cartArray && cartArray.map(item => {
                            return <CartItem cartItemInfo={item.name} cartItemQuantity={item.quantity} cartItemPrice={item.price} slug={item.slug} />
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
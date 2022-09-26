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

function CartItem(props) {
    let [ itemQuantity, setItemQuantity ] = useState(props.cartItemQuantity)
    let [ cartArray, setCartArray ] = useState([]);
    console.log('cart item prop', props)

    function addSummaryItem(e) {
        console.log('add item event', e)
        console.log('YAYA props', props)
        // props.cartItemQuantity += 1
        setItemQuantity(itemQuantity += 1)
        props.increaseCartItem(itemQuantity, props)
    }

    function subtractSummaryItem() {
        console.log("subtract an item")
        if (itemQuantity > 0) {
            setItemQuantity(itemQuantity -= 1)
        }
    }

    useEffect(() => {
        setCartArray(
            JSON.parse(localStorage.getItem("cart"))
        )
        //   console.log('testing cart array', cartArray, typeof cartArray)
    }, [])


    return(
        <Row>
            <Col className="d-flex mb-3 justify-content-between">
                <Image style={{ width: "4rem", height: "4rem" }} src={`../assets/cart/image-${props.slug}.jpg`} />
                <div className="cart-item-name-price">
                    <p className="m-0">{props.cartItemInfo}</p>
                    <p className="m-0">{props.cartItemQuantity * props.cartItemPrice}</p>
                </div>
                <div className="d-flex">
                    <Button onClick={subtractSummaryItem} className="align-self-start">-</Button>
                        <Form style={{ width: "3rem"}}>
                            <Form.Control type="text" value={itemQuantity} />
                        </Form>
                    <Button onClick={addSummaryItem} className="align-self-start">+</Button>
                </div>
            </Col>
        </Row>
    )
}

export default CartItem;
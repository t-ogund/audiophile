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
import ProductSuggestionCard from "./ProductSuggestionCard";
import Cart from "./Cart";

function ProductDetail(props) {
    let [ cartArray, setCartArray ] = useState([]);
    let [ itemInput, setItemInput ] = useState(0);
    let [ newItem, setNewItem ] = useState({});
    let [ product, setProduct ] = useState(null);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cart"))
        if (items) {
            setCartArray(items)
        }
        console.log('use effect', cartArray)
    }, [])

    let id = useParams();
    useEffect(() => {
        console.log('test id', id)
        fetch("/headphone-data")
        .then(response => response.json())
        .then(data => {
            setProduct(
                product = data.data.find(item => {
                    if (item.slug === id.id) {
                        console.log(id.id)
                        return item
                    }
                })
            )
            console.log('new product', product)
            
        })
    }, [cartArray])
    const formattedTitle = id.id.split("-").join(" ");
    const productData = props.jsonData.data.filter(item => {
        if (item.slug === id.id) {
            return item
        }
    })

    function subtractItem() {
        if (itemInput > 0) {
            setItemInput(
                itemInput -= 1
            )
        }
    }

    function addItem() {
        if (itemInput >= 0) {
            setItemInput(
                itemInput += 1
            )
        }
    }

    function handleChange(e) {
        setItemInput(
            itemInput = parseInt(e.target.value)
        )
    } 
    
    function addToCart() {
        if (localStorage.length === 0) {
            setCartArray(
                localStorage.clear(),
                cartArray = []
            )
        }
       if (itemInput > 0) {
            setNewItem(
                newItem = {},
                newItem.name = productData[0].name,
                newItem.quantity = itemInput,
                newItem.price = productData[0].price,
                newItem.slug = productData[0].slug
            )
    } 
    setCartArray(
        cartArray = cartArray.filter(item => {
            console.log('testing productData', productData)
            if (item.name !== productData[0].name) {
                console.log("item.name", item.name, "productData[0].name", productData[0].name)
                return item
            }
        }),
        console.log(cartArray)
    )     
        cartArray.push(newItem)
        localStorage.setItem("cart", JSON.stringify(cartArray));
    }

    return (
        <>
            <Navigation />
            <h1>{ formattedTitle } Product Detail Page</h1>
            <Container>
                <Link to="/headphones">Go Back</Link>
                <Row style={{ marginBottom: "7rem" }}>
                {/* <Cart removeAll={removeAll} cartArray={cartArray} quantity={ itemInput } price={productData[0].price} slug={productData[0].slug} /> */}
                    <Col lg={6} md={6} sm={12}>
                        <picture>
                            <source media="(max-width: 2500px)" srcset="../assets/shared/desktop/image-best-gear.jpg" />
                            <source media="(max-width: 768px)" srcset="../assets/shared/tablet/image-best-gear.jpg" />
                            <source media="(max-width: 375px)" srcset="../assets/shared/mobile/image-best-gear.jpg" />
                            <Image rounded fluid src="../assets/home/mobile/image-earphones-yx1.jpg" width="100%" />
                        </picture>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <h3>{productData[0].new ? "NEW PRODUCT" : null}</h3>
                        <h2>
                            {productData[0].name}
                        </h2>
                        <p>
                            {productData[0].description}
                        </p>
                        <p>$ {productData[0].price}</p>
                        <Row>
                            <Col lg={4} md={4} sm={4} xs={4} className="d-flex">
                                <Button onClick={subtractItem}>-</Button>
                                    <Form>
                                        <Form.Control onChange={handleChange} value={itemInput} placeholder={0} type="text" />
                                    </Form>
                                <Button onClick={addItem}>+</Button>
                            </Col>
                            <Col>
                                <Button onClick={addToCart} className="ml-3">ADD</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6} md={12}>
                        <h2 className="mb-3">FEATURES</h2>
                        <p className="mb-4" style={{ lineHeight: "1.7rem" }}>
                            {productData[0].features}
                        </p>
                    </Col>
                    <Col lg={6} md={12}>
                        <h2 className="mb-3">IN THE BOX</h2>
                        <ul>
                            {productData[0].includes.map(includedItem => {
                                return <li>{includedItem.quantity}x {includedItem.item}</li>
                            })}
                        </ul>
                    </Col>
                </Row>

                <Row className="bg-dark">
                    <Col lg={6} md={6} sm={12}>
                        <Row>
                            <Col>
                                <picture>
                                    <source media="(max-width: 2500px)" srcset={`.${productData[0].gallery.first.desktop}`} />
                                    <source media="(max-width: 768px)" srcset={`.${productData[0].gallery.first.tablet}`} />
                                    <source media="(max-width: 375px)" srcset={`.${productData[0].gallery.first.mobile}`} />
                                    <Image rounded fluid src={`.${productData[0].gallery.first.mobile}`} width="100%" />
                                </picture>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <picture>
                                    <source media="(max-width: 2500px)" srcset={`.${productData[0].gallery.second.desktop}`} />
                                    <source media="(max-width: 768px)" srcset={`.${productData[0].gallery.second.tablet}`} />
                                    <source media="(max-width: 375px)" srcset={`.${productData[0].gallery.second.mobile}`} />
                                    <Image rounded fluid src={`.${productData[0].gallery.second.mobile}`} width="100%" />
                                </picture>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <picture>
                            <source media="(max-width: 2500px)" srcset={`.${productData[0].gallery.third.desktop}`} />
                            <source media="(max-width: 768px)" srcset={`.${productData[0].gallery.third.tablet}`} />
                            <source media="(max-width: 375px)" srcset={`.${productData[0].gallery.third.mobile}`} />
                            <Image rounded fluid src={`.${productData[0].gallery.third.mobile}`} width="100%" />
                        </picture>
                    </Col>
                </Row>

                <Row>
                    <Col style={{ marginTop: "7rem", marginBottom: "2rem" }} className="text-center">
                        <h3>YOU MAY ALSO LIKE</h3>
                    </Col>
                </Row>
                <Row>
                    {
                        productData[0].others.map((suggestedItem, index)=> {
                            return (
                                <ProductSuggestionCard
                                    key={index} 
                                    name={suggestedItem.name} 
                                    desktopImage={`.${suggestedItem.image.desktop}`} 
                                    tabletImage={`.${suggestedItem.image.tablet}`}
                                    mobileImage={`.${suggestedItem.image.mobile}`}
                                    />
                            )
                        })
                    }
                </Row>
                <Row style={{ marginTop: "10rem", marginBottom: "8rem" }} className="text-center">
                    <Col lg={4} md={4} sm={12}>
                        <Card style={{ height: '15rem' }}>
                        <Image className="home-card-images" src="../assets/shared/desktop/image-category-thumbnail-headphones.png" />
                            <Card.Body className="d-flex flex-column justify-content-end">
                                <Card.Title>
                                    Headphones
                                </Card.Title>
                                <Link to="/headphones">
                                    Shop >
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <Card style={{ height: '15rem' }}>
                        <Image className="home-card-images" src="../assets/shared/desktop/image-category-thumbnail-speakers.png" />
                            <Card.Body className="d-flex flex-column justify-content-end">
                                <Card.Title>
                                    Speakers
                                </Card.Title>
                                <Link to="/speakers">
                                    Shop >
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <Card style={{ height: '15rem' }}>
                        <Image className="home-card-images" src="../assets/shared/desktop/image-category-thumbnail-earphones.png" />
                            <Card.Body className="d-flex flex-column justify-content-end">
                                <Card.Title>
                                    Earphones
                                </Card.Title>
                                <Link to="/earphones">
                                    Shop >
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="d-flex mb-5">
                    <Col className="best-audio-text order-sm-last order-md-last order-lg-first align-self-center text-sm-center text-lg-start" xs={12} lg={6}>
                        <h3>BRINGING YOU THE BEST AUDIO GEAR</h3>
                        <p>
                            Located at the heart of New York City, Audiophile is the premier 
                            store for high end headphones, earphones, speakers, and audio accessories. 
                            We have a large showroom and luxury demonstration rooms available for you 
                            to browse and experience a wide range of our products. Stop by our store to 
                            meet some of the fantastic people who make Audiophile the best place to buy 
                            your portable audio equipment.
                        </p>
                    </Col>
                    <Col className="headphone-profile order-sm-first order-md-first order-lg-last" xs={12} lg={6}>
                        <picture>
                            <source media="(max-width: 2500px)" srcset="../assets/shared/desktop/image-best-gear.jpg" />
                            <source media="(max-width: 768px)" srcset="../assets/shared/tablet/image-best-gear.jpg" />
                            <source media="(max-width: 375px)" srcset="../assets/shared/mobile/image-best-gear.jpg" />
                            <Image rounded fluid src="../assets/home/mobile/image-earphones-yx1.jpg" width="100%" />
                        </picture>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row style={{ backgroundColor: "#101010" }} className="mt-5 d-flex justify-content-between p-5" lg={6} sm={12}>
                    <Col style={{ color: "#fff" }}>
                        <h3>audiophile</h3>

                        {/* <p>
                            Audiophile is an all in one stop to fulfill your audio needs. 
                            We're a small team of music lovers and sound specialists who are 
                            devoted to helping you get the most out of personal audio. Come and 
                            visit our demo facility - we're open 7 days a week.
                        </p>

                        <p>Copyright 2021. All Rights Reserved</p> */}
                        
                    </Col>
                    <Col style={{ color: "#fff" }} lg={6} sm={12}>
                        <ul className="footer-menu">
                            <li>HOME</li>
                            <li>HEADPHONES</li>
                            <li>SPEAKERS</li>
                            <li>EARPHONES</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="pl-5" style={{ backgroundColor: "#101010", color: "#fff" }}>
                    <Col lg={6} sm={12}>
                         <p>
                            Audiophile is an all in one stop to fulfill your audio needs. 
                            We're a small team of music lovers and sound specialists who are 
                            devoted to helping you get the most out of personal audio. Come and 
                            visit our demo facility - we're open 7 days a week.
                        </p>
                    </Col>
                    <Col className="d-flex align-items-start justify-content-end">
                        <Image className="social-icons" src="../assets/shared/desktop/icon-facebook.svg" />
                        <Image className="social-icons" src="../assets/shared/desktop/icon-twitter.svg" />
                        <Image className="social-icons" src="../assets/shared/desktop/icon-instagram.svg" />
                    </Col>
                </Row>
                <Row className="pl-5" style={{ backgroundColor: "#101010", color: "#fff" }}>
                    <Col>
                        <p>Copyright 2021. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProductDetail
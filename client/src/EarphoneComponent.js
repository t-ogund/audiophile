import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function EarphoneComponent(props) {
    return (
        <Row className="mb-5">
                <Col md={6} sm={12}>
                    <picture>
                        <source media="(max-width: 2500px)" srcset={ props.desktopImage } />
                        <source media="(max-width: 768px)" srcset={ props.tabletImage } />
                        <source media="(max-width: 375px)" srcset={ props.mobileImage } />
                        <Image rounded fluid src={ props.mobileImage } width="100%" />
                    </picture>
                </Col>
                <Col className="d-flex justify-content-center flex-column text-center text-md-start" md={6} sm={12}>
                    {props.new ? <h5>New Product</h5> : null}
                    <h2>{props.name}</h2>
                    <p>
                        {props.description}
                    </p>
                    <Link to={`/earphones/${props.slug}`}>
                        <Button>
                            SEE PRODUCT
                        </Button>
                    </Link>
                </Col>
        </Row>
    )
}

export default EarphoneComponent;
import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function ProductSuggestionCard(props) {
    return (
        <Col sm={12} md={4} lg={4}>
            <Card>
                <Card.Body className="d-flex flex-column justify-content-end p-0">
                    <picture className="card-img-top">
                        <source media="(max-width: 2500px)" srcset={props.desktopImage} />
                        <source media="(max-width: 768px)" srcset={props.tabletImage} />
                        <source media="(max-width: 375px)" srcset={props.mobileImage} />
                        <Image rounded fluid src={props.mobileImage} width="100%" />
                    </picture>
                </Card.Body>
            </Card>
            <Row style={{ marginBottom: "3rem" }}>
                <Col className="text-center">
                    <h3 className="mt-4 mb-4">{props.name}</h3>
                    <Button>
                        SEE PRODUCT
                    </Button>
                </Col>
            </Row>
        </Col>
    )
}

export default ProductSuggestionCard
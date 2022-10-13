import React, { useState, useEffect } from "react";
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function SummaryItem(props) {
    // console.log('summary item props', props)
    return (
        <Row>
            <Col xs={3} style={{ backgroundColor: "red" }}>
                <Image src={props.src} style={{ width: "4rem", height: "4rem" }} />
            </Col>
            <Col style={{ backgroundColor: "yellow" }}>
                {props.title}
                {props.price}
            </Col>
            <Col className="d-flex justify-content-end" style={{ backgroundColor: "orange" }}>
            <h6>x{props.quantity}</h6>
            </Col>
        </Row>
    )
}

export default SummaryItem
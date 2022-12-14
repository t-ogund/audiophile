import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Cart from "./Cart";
import Button from "react-bootstrap/Button";

function Navigation(props) {
    const [show, setShow] = useState(false);
    let [ cartArray, setCartArray ] = useState([]);
    let [ getCart, setGetCart ] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // console.log('nav props', props)

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cart"))
            if (items) {
                setCartArray(items)
            }
            if (cartArray.length === 1 && cartArray[0].quantity === 0) {
                // setCartArray(cartArray = [])
                setGetCart(getCart = [])
            }
            // console.log('testing', cartArray)
    }, [ props ])

    function handleClick() {
        setShow(true);
    }

    function passCart(x) {
        // console.log('x', x)
        setGetCart(x)
    }
    // console.log(getCart)

    props.passDataToAppProp(getCart);
    console.log('nav cart array:', cartArray, 'getCart:', getCart)
    return(
        <>
            <Container fluid>
                <Row className="justify-content-space-between">
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="/">
                                <h3>Audiophile</h3>
                            </Navbar.Brand>
                        </Container>
                        <Nav>
                            <Link to="/">
                                <Nav.Link  className="nav-text-color" href="home">Home</Nav.Link>
                            </Link>
                            <Link to="/headphones">
                                <Nav.Link  className="nav-text-color" href="headphones">Headphones</Nav.Link>
                            </Link>
                            <Link to="/speakers">
                                <Nav.Link  className="nav-text-color" href="speakers">Speakers</Nav.Link>
                            </Link>
                            <Link to="/earphones">
                                <Nav.Link  className="nav-text-color" href="earphones">Earphones</Nav.Link>
                            </Link>
                        </Nav>
                        <Container className="justify-content-end align-items-center">
                            <h6 className="nav-text-color">
                            <svg onClick={handleClick} width="23" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z" fill="#FFF" fill-rule="nonzero"/></svg>
                            </h6>
                        </Container>
                    </Navbar>
                </Row>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Cart passCartProp={passCart} />
                </Modal.Body>
                {
                    (!getCart || getCart == [] || cartArray.length === 0) ?
                    null
                    :
                    <Modal.Footer>
                        <Link to="/checkout">
                            <Button className="flex" variant="primary">
                                Checkout
                            </Button>
                        </Link>
                    </Modal.Footer>
                }
            </Modal>
        </>
    )
}

export default Navigation;
import React from 'react';
import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import {NavLink} from "react-router-dom";
import {useShoppingCart} from "../context/ShoppingCartContext";

const Navbar = () => {
    const {openCart, cartQuantity} = useShoppingCart()

    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-4">
            <Container>
                <Nav className="me-auto d-flex align-items-center justify-content-around fw-semibold fs-3" style={{fontSize: "1.5rem"}}>
                    <Nav.Link to="/" as={NavLink}>Accueil</Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>Boutique</Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>À propos</Nav.Link>
                </Nav>
                <Button
                    style={{width: "3rem", height: "3rem", position: "relative"}}
                    variant="outline-dark"
                    className="rounded-circle justify-content-center align-items-center bg"
                    onClick={openCart}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                         x="0px" y="0px"
                         viewBox="0 0 60 60" fill="currentColor">
                        <path d="M11.68,13l-0.833-5h-2.99C7.411,6.28,5.859,5,4,5C1.794,5,0,6.794,0,9s1.794,4,4,4c1.859,0,3.411-1.28,3.858-3h1.294l0.5,3
	H9.614l5.171,26.016c-2.465,0.188-4.518,2.086-4.76,4.474c-0.142,1.405,0.32,2.812,1.268,3.858C12.242,48.397,13.594,49,15,49h2
	c0,3.309,2.691,6,6,6s6-2.691,6-6h11c0,3.309,2.691,6,6,6s6-2.691,6-6h4c0.553,0,1-0.447,1-1s-0.447-1-1-1h-4.35
	c-0.826-2.327-3.043-4-5.65-4s-4.824,1.673-5.65,4h-11.7c-0.826-2.327-3.043-4-5.65-4s-4.824,1.673-5.65,4H15
	c-0.842,0-1.652-0.362-2.224-0.993c-0.577-0.639-0.848-1.461-0.761-2.316c0.152-1.509,1.546-2.69,3.173-2.69h0.791
	c0.014,0,0.025,0,0.039,0h38.994C57.763,41,60,38.763,60,36.013V13H11.68z M4,11c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2
	S5.103,11,4,11z"/>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                    </svg>
                    {cartQuantity > 0 &&
                        (<div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                              style={{
                                  color: "white",
                                  width: "1.5rem",
                                  height: "1.5rem",
                                  position: "absolute",
                                  bottom: "0",
                                  right: "0",
                                  transform: "translate(25%, 25%)"
                              }}>{cartQuantity}
                        </div>)}

                </Button>
            </Container>
        </NavbarBs>
    );
};

export default Navbar;
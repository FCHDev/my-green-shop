import React, {useState} from 'react';
import {Button, Card, Collapse} from "react-bootstrap";
import FormatCurrency from "../utilities/formatCurrency";
import {useShoppingCart} from "../context/ShoppingCartContext";

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
    description: string
}

const StoreItem = ({id, name, price, imgUrl, description}: StoreItemProps) => {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id);
    const [open, setOpen] = useState(false)

    return (
        <Card className="h-100">
            <Card.Img className="mt-3" variant="top" src={imgUrl} height="250px" style={{objectFit: "contain"}}/>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-4">{name}</span>
                    <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">

                    <Button
                        className="w-100"
                        onClick={() => setOpen(!open)}
                        variant="outline-dark"
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        Description
                    </Button>
                    <div style={{marginTop:"1rem"}}>
                        <Collapse in={open} dimension="width">
                            <div id="example-collapse-text">
                                <Card body className="fst-italic" style={{ width: '400px' }}>
                                    {description}
                                </Card>
                            </div>
                        </Collapse>
                    </div>

                    {quantity === 0 ? (
                        <Button className="w-100 text-dark fw-bold" variant="secondary" onClick={() => increaseCartQuantity(id)}>+ Ajouter au panier</Button>
                    ) : <div className="d-flex align-items-center flex-column" style={{gap: ".5rem"}}>
                        <div className="d-flex align-items-center justify-content-center" style={{gap: ".5rem"}}>
                            <Button className="fw-bold" variant="outline-dark" onClick={() => decreaseCartQuantity(id)}>-</Button>
                            <div className="d-flex flex-column justify-content-center align-items-center p-2">
                                <span className="fs-6 fw-bold">Quantité</span>
                                <span className="fs-6">{quantity}</span>
                            </div>
                            <Button className="fw-bold" variant="outline-dark" onClick={() => increaseCartQuantity(id)}>+</Button>
                        </div>
                        <Button className="fw-bold" onClick={() => removeFromCart(id)} variant={"outline-danger"} size={"sm"}>Supprimer</Button>
                    </div>}
                </div>
            </Card.Body>
        </Card>
    );
};

export default StoreItem;
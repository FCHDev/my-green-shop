import React, {useState} from 'react';
import storeItems from "../data/dailygreen-db.json"
import {Button, Col, Row} from "react-bootstrap";
import StoreItem from "../components/StoreItem";

const Store = () => {
    const [display, setDisplay] = useState(
        <Row md={2} xs={1} lg={3} className="g-3">
            {storeItems.map(item => (
                <Col key={item.id}><StoreItem {...item}/></Col>
            ))}
        </Row>)

    return (
        <>
            <h1 className="mb-4">Boutique</h1>
            <div className="category-buttons">
                <Button className="mb-3 me-5" variant="dark" onClick={() => {
                    setDisplay(
                        <Row md={2} xs={1} lg={3} className="g-3">
                            {storeItems.map(item => (
                                <Col key={item.id}><StoreItem {...item}/></Col>
                            ))}
                        </Row>)
                }}>
                    Tous les produits</Button>
                <Button className="mb-3 me-3" variant="outline-dark" onClick={() => {
                    setDisplay(
                        <Row md={2} xs={1} lg={3} className="g-3">
                            {storeItems.filter((item) => {
                                return item.category.includes("Décoration")
                            }).map(item => (
                                <Col key={item.id}><StoreItem {...item}/></Col>
                            ))}
                        </Row>)
                }}>
                    Décoration</Button>
                <Button className="mb-3 me-3" variant="outline-dark" onClick={() => {
                    setDisplay(
                        <Row md={2} xs={1} lg={3} className="g-3">
                            {storeItems.filter((item) => {
                                return item.category.includes("Entretien")
                            }).map(item => (
                                <Col key={item.id}><StoreItem {...item}/></Col>
                            ))}
                        </Row>)
                }}>
                    Entretien</Button>
                <Button className="mb-3 me-3" variant="outline-dark" onClick={() => {
                    setDisplay(
                        <Row md={2} xs={1} lg={3} className="g-3">
                            {storeItems.filter((item) => {
                                return item.category.includes("Hygiène")
                            }).map(item => (
                                <Col key={item.id}><StoreItem {...item}/></Col>
                            ))}
                        </Row>)
                }}>
                    Hygiène</Button>
            </div>
            {display}
        </>
    );
};

export default Store;
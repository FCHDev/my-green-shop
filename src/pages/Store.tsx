import React, {useState} from 'react';
import storeItems from "../data/dailygreen-db.json"
import {Col, Row} from "react-bootstrap";
import StoreItem from "../components/StoreItem";

const Store = () => {
    const [selectButton, setSelectButton] = useState("Tous")

    const [display, setDisplay] = useState(
        <div>
            <Row md={2} xs={1} lg={4} className="g-3">
                {storeItems.map(item => (
                    <Col key={item.id}><StoreItem {...item}/></Col>
                ))}
            </Row>
        </div>
    )

    return (
        <div className="container pt-3 mb-32 min-h-screen">
            <h1 className="mb-4 font-bold">Boutique</h1>
            <div className="flex flex-col justify-center items-center">
                <button
                    className={`${selectButton === "Tous" ? "bg-black text-white font-semibold" : "bg-white text-green-600"} font-semibold mb-4 py-3 px-3 rounded-xl mx-2 min-w-[120px]`}
                    onClick={() => {
                        setDisplay(
                            <Row md={2} xs={1} lg={4} className="g-3">
                                {storeItems.map(item => (
                                    <Col key={item.id}><StoreItem {...item}/></Col>
                                ))}
                            </Row>)
                        setSelectButton("Tous")
                    }}>
                    Tous les produits
                </button>
                <div className="flex items-center justify-center w-full mx-auto pb-3">
                    <button
                        className={`${selectButton === "Décoration" ? "bg-green-600 text-white font-semibold" : "bg-white text-green-600"} py-3 px-2 rounded-xl my-1 mx-2 w-[120px]`}
                        onClick={() => {
                            setDisplay(
                                <Row md={2} xs={1} lg={4} className="g-3">
                                    {storeItems.filter((item) => {
                                        return item.category.includes("Décoration")
                                    }).map(item => (
                                        <Col key={item.id}><StoreItem {...item}/></Col>
                                    ))}
                                </Row>)
                            setSelectButton("Décoration")
                        }}>
                        Décoration
                    </button>
                    <button
                        className={`${selectButton === "Entretien" ? "bg-green-600 text-white font-semibold" : "bg-white text-green-600"} py-3 px-2 rounded-xl my-1 mx-2 w-[120px]`}
                        onClick={() => {
                            setDisplay(
                                <Row md={2} xs={1} lg={4} className="g-3">
                                    {storeItems.filter((item) => {
                                        return item.category.includes("Entretien")
                                    }).map(item => (
                                        <Col key={item.id}><StoreItem {...item}/></Col>
                                    ))}
                                </Row>)
                            setSelectButton("Entretien")
                        }}>
                        Entretien
                    </button>
                    <button
                        className={`${selectButton === "Hygiène" ? "bg-green-600 text-white font-semibold" : "bg-white text-green-600"} py-3 px-2 rounded-xl my-1 mx-2 w-[120px]`}
                        onClick={() => {
                            setDisplay(
                                <Row md={2} xs={1} lg={4} className="g-3">
                                    {storeItems.filter((item) => {
                                        return item.category.includes("Hygiène")
                                    }).map(item => (
                                        <Col key={item.id}><StoreItem {...item}/></Col>
                                    ))}
                                </Row>)
                            setSelectButton("Hygiène")
                        }}>
                        Hygiène
                    </button>
                </div>

            </div>
            {display}
        </div>
    );
};

export default Store;
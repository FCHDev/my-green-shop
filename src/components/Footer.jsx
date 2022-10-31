import React from 'react';
import {MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon} from 'mdb-react-ui-kit';
import logo from "../assets/dailygreen-logo.png"


export default function App() {
    return (
        <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted mb-0 mt-5 p-1 h-auto w-100'
        style={{position: "sticky"}}>
            <section className=''>

                <MDBContainer className='text-center text-md-start mt-5 pt-3'>
                    <MDBRow>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <img src={logo} alt="dailygreen" style={{width: "50px"}}/>
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                                amet,
                                consectetur adipisicing elit.
                            </p>
                        </MDBCol>


                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Liens utiles</h6>

                            <span style={{textDecoration: "none"}} className='text-reset'>
                                Pricing
                            </span>
                            <br/>
                            <span style={{textDecoration: "none"}} className='text-reset'>
                                Paramètres
                            </span>
                            <br/>
                            <span style={{textDecoration: "none"}} className='text-reset'>
                                Commandes
                            </span>
                            <br/>
                            <span style={{textDecoration: "none"}} className='text-reset'>
                                Help
                            </span>

                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <MDBIcon icon="home" className="me-0"/>
                            DailyGreen
                            <br/>
                            23 avenue Marceau
                            <br/>
                            <MDBIcon icon="home" className="me-0"/>
                            Paris 75008, France
                            <br/>

                            <span className="mt-2">info@dailygreen.com</span>
                            <br/>
                            <MDBIcon icon="phone" className="me-1"/> + 01 234 567 88
                            <br/>
                            <MDBIcon icon="print" className="me-1"/> + 01 234 567 89

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                © 2022 Copyright
                <br/>
                <span className='text-reset fw-bold'> fch80.com</span>

            </div>
        </MDBFooter>
    );
}
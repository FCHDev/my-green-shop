import React from 'react';
import {MDBFooter, MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import logo from "../assets/dailygreen-logo.png"


export default function App() {
    return (
        <MDBFooter bgColor='dark'
                   className='hidden sm:block w-full text-center flex flex-col justify-center items-center text-muted mb-0 py-2'>
            <section>
                <MDBContainer className='text-center sm:my-3 w-full'>
                    <MDBRow>
                        <MDBCol className='mx-auto'>
                                <img src={logo} alt="dailygreen" className="h-[50px] w-auto mx-auto
                                "/>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='font-light text-sm text-white text-center'>
                <span>© 2022 Copyright </span>
                <span className="text-green-600 font-semibold">fchevalier.com</span>

            </div>
        </MDBFooter>
    );
}
import {Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import {ShoppingCartProvider} from "./context/ShoppingCartContext";
import Footer from "./components/Footer";


function App() {
    return (
        <ShoppingCartProvider>
            <Navbar/>
            <Container className="mb-4" style={{minHeight: "67vh"}}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/store" element={<Store/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </Container>
            <Footer/>
        </ShoppingCartProvider>
    );
}

export default App;

import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Navbar } from "./components/Navbar";
import  Home  from "./pages/Home";
import { Careers } from "./pages/Careers";
import { Services } from "./pages/Services";
import { Blogs } from "./pages/Blogs";
import  Footer  from "./components/Footer";



function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/Services" element={<Services/>}/>
          <Route path="/Blogs" element={<Blogs/>}/>
          <Route path="/Careers" element={<Careers/>}/>
        </Routes>
      </Container>
      <Footer/>
    </>
    
  )
}

export default App;

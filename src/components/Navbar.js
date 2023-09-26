import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import '../App.css';

function NavbarComponent() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isScreenOver1000, setIsScreenOver1000] = useState(window.innerWidth > 1000);
  
    useEffect(() => {
      // Update isScreenOver1000 when the window is resized
      const handleResize = () => {
        setIsScreenOver1000(window.innerWidth > 1000);
      };
  
      // Add an event listener for window resize
      window.addEventListener("resize", handleResize);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return(
        <div>
  <Navbar expand="lg" className='fixed-top' style={{ backgroundColor: "#457b9d", height: "70px" }} data-bs-theme="dark">
  <Container>
    <div className="d-flex justify-content-between align-items-center w-100">
      <Navbar.Brand href="#home">Byte Bridge Solutions</Navbar.Brand>
      {!isScreenOver1000 && (
        <Button style={{ height: "40px", width: "50px", backgroundColor: "#1d3557" }} className="openOffCanvas fa-solid fa-grip-lines" onClick={handleShow}></Button>
      )}
    </div>
    <div className="w-100 d-lg-none"></div> {/* Spacer for small screens */}
    <Navbar.Collapse>
      <Nav className="me-auto">
        <Nav.Link className="mx-3" href="#home">Home</Nav.Link>
        <Nav.Link className="mx-3" href="#features">About</Nav.Link>
        <Nav.Link className="mx-3" href="#pricing">Shop</Nav.Link>
        <Nav.Link className="mx-3" href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> 
      <Offcanvas style={{ width: "100%", backgroundColor: "#457b9d" }} placement="end" show={show} onHide={handleClose}>
  <Offcanvas.Header closeButton>
    <Offcanvas.Title></Offcanvas.Title>
  </Offcanvas.Header>
  <Offcanvas.Body>
    <center>
      <Nav.Link className="mx-2">
        <a
          style={{ width: "100%", fontSize: "30px", textDecoration: "none", color: "#000" }}
          href="#home"
          className="btn btn-link text-dark"
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#a8dadc")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "")}
        >
          Home
        </a>
      </Nav.Link>
      <Nav.Link className="mx-2">
        <a
          style={{  width: "100%", fontSize: "30px", textDecoration: "none", color: "#000" }}
          href="#features"
          className="btn btn-link text-dark"
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#a8dadc")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "")}
        >
          About
        </a>
      </Nav.Link>
      <Nav.Link className="mx-2">
        <a
          style={{  width: "100%", fontSize: "30px", textDecoration: "none", color: "#000" }}
          href="#pricing"
          className="btn btn-link text-dark"
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#a8dadc")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "")}
        >
          Shop
        </a>
      </Nav.Link>
      <Nav.Link className="mx-2">
        <a
          style={{  width: "100%", fontSize: "30px", textDecoration: "none", color: "#000" }}
          href="#contact"
          className="btn btn-link text-dark"
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#a8dadc")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "")}
        >
          Contact
        </a>
      </Nav.Link>
    </center>
  </Offcanvas.Body>
</Offcanvas>
      </div>    
    )
}

export default NavbarComponent;
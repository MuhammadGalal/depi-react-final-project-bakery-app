import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BakeryNavBar() {
  // bg="dark"
  // variant="dark"
  return (
    <>
      <Navbar className='navBg' expand="lg">
      <Container>
        <Navbar.Brand href="#home">BAKERY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home">ORDER</Nav.Link>
            <Nav.Link href="#features">MENU</Nav.Link>
            <Nav.Link href="#pricing">CLASSES</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#schedule">SCHEDULE</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#cart">Cart(0)</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default BakeryNavBar;
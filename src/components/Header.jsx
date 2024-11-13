import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const color = `rgb(1, 57, 116)`;

  function backToHome() {
    navigate('/shop');
  }

  function goToCart() {
    navigate('/cart');
  }

  function goToFavorites(){
    navigate('/favorites')
  }

  function goToProfile(){
    navigate('/profile')
  }

  return (
    <Navbar expand="xxl" style={{ backgroundColor: "transparent" }}>
      <Container>
        <Navbar.Brand style={{ color: color, fontWeight: "bold" }} className='brand' onClick={backToHome}>Vier's Apparel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown menuVariant='dark' className='dropdowns' title="WOMEN'S" id="basic-nav-dropdown">
              <NavDropdown.Item href={`/categorysection/women/tops`}>TOPS</NavDropdown.Item>
              <NavDropdown.Item href={`/categorysection/women/bottoms`}>BOTTOMS</NavDropdown.Item>
              <NavDropdown.Item href={`/categorysection/women/dress`}>DRESS</NavDropdown.Item>
              <NavDropdown.Item href={`/categorysection/women/footwear`}>FOOTWEAR</NavDropdown.Item>
              <NavDropdown.Item href={`/categorysection/women/accessories`}>ACCESSORIES</NavDropdown.Item>
              <NavDropdown.Item href={`/categorysection/women/others`}>OTHERS</NavDropdown.Item>
              <NavDropdown.Item href="/section/women">ALL ITEMS</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown menuVariant='dark' className='dropdowns' title="MEN'S" id="basic-nav-dropdown">
              <NavDropdown.Item href={`/categorysection/men/tops`}>TOPS</NavDropdown.Item>
              <NavDropdown.Item href={`/categorysection/men/bottoms`}>BOTTOMS</NavDropdown.Item>
              <NavDropdown.Item href={`/categorysection/men/footwear`}>FOOTWEAR</NavDropdown.Item>
              <NavDropdown.Item href={`/categorysection/men/accessories`}>ACCESSORIES</NavDropdown.Item>
              <NavDropdown.Item href={`/categorysection/men/others`}>OTHERS</NavDropdown.Item>
              <NavDropdown.Item href="/section/men">ALL ITEMS</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href={`/category/accessories`}>ALL ACCESSORIES</Nav.Link>

            <Nav.Link href={`/category/footwear`}>ALL FOOTWEAR</Nav.Link>
            
            <Nav.Link>DEALS</Nav.Link>
          </Nav>
          <Nav style={{ fontSize: "20px" }}>
            <Nav.Link onClick={goToProfile}><i className="bi bi-person-circle"></i></Nav.Link>
            <Nav.Link onClick={goToFavorites}><i className="bi bi-heart-fill"></i></Nav.Link>
            <Nav.Link onClick={goToCart}><i className="bi bi-cart-fill"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

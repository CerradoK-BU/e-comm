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
              <NavDropdown.Item href={`/categorysection?section=women&category=tops`}>TOPS</NavDropdown.Item>
              <NavDropdown.Item href={`/categorysection?section=women&category=bottoms`}>BOTTOMS</NavDropdown.Item>
              <NavDropdown.Item href={`/categorysection?section=women&category=dress`}>DRESS</NavDropdown.Item>
              <NavDropdown.Item href={`/categorysection?section=women&category=footwear`}>FOOTWEAR</NavDropdown.Item>
              <NavDropdown.Item href={`/categorysection?section=women&category=accessories`}>ACCESSORIES</NavDropdown.Item>
              <NavDropdown.Item href={`/categorysection?section=women&category=others`}>OTHERS</NavDropdown.Item>
              <NavDropdown.Item href="/section?section=women">ALL ITEMS</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown menuVariant='dark' className='dropdowns' title="MEN'S" id="basic-nav-dropdown">
              <NavDropdown.Item href={`/categorysection?section=men&category=tops`}>TOPS</NavDropdown.Item>
              <NavDropdown.Item href={`/categorysection?section=men&category=bottoms`}>BOTTOMS</NavDropdown.Item>
              <NavDropdown.Item href={`/categorysection?section=men&category=footwear`}>FOOTWEAR</NavDropdown.Item>
              <NavDropdown.Item href={`/categorysection?section=men&category=accessories`}>ACCESSORIES</NavDropdown.Item>
              <NavDropdown.Item href={`/categorysection?section=men&category=others`}>OTHERS</NavDropdown.Item>
              <NavDropdown.Item href="/section?section=men">ALL ITEMS</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href={`/category?category=accessories`}>ALL ACCESSORIES</Nav.Link>

            <Nav.Link href={`/category?category=footwear`}>ALL FOOTWEAR</Nav.Link>
            
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

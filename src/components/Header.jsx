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
              <NavDropdown.Item href={`/category/women/tops`}>TOPS</NavDropdown.Item>
              <NavDropdown.Item href={`/category/women/bottoms`}>BOTTOMS</NavDropdown.Item>
              <NavDropdown.Item href={`/category/women/dress`}>DRESS</NavDropdown.Item>
              <NavDropdown.Item href={`/category/women/footwear`}>FOOTWEAR</NavDropdown.Item>
              <NavDropdown.Item href={`/category/women/accessories`}>ACCESSORIES</NavDropdown.Item>
              <NavDropdown.Item href={`/category/women/others`}>OTHERS</NavDropdown.Item>
              <NavDropdown.Item href="/section/women">ALL ITEMS</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown menuVariant='dark' className='dropdowns' title="MEN'S" id="basic-nav-dropdown">
              <NavDropdown.Item href={`/category/men/tops`}>TOPS</NavDropdown.Item>
              <NavDropdown.Item href={`/category/men/bottoms`}>BOTTOMS</NavDropdown.Item>
              <NavDropdown.Item href={`/category/men/footwear`}>FOOTWEAR</NavDropdown.Item>
              <NavDropdown.Item href={`/category/men/accessories`}>ACCESSORIES</NavDropdown.Item>
              <NavDropdown.Item href={`/category/men/others`}>OTHERS</NavDropdown.Item>
              <NavDropdown.Item href="/section/men">ALL ITEMS</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown menuVariant='dark' className='dropdowns' title="ACCESSORIES" id="basic-nav-dropdown">
              <NavDropdown.Item href={`/category/accessories/bags`}>BAGS</NavDropdown.Item>
              <NavDropdown.Item href={`/category/accessories/belts`}>BELTS</NavDropdown.Item>
              <NavDropdown.Item href={`/category/accessories/wallets`}>WALLETS</NavDropdown.Item>
              <NavDropdown.Item href={`/category/accessories/caps`}>CAPS</NavDropdown.Item>
              <NavDropdown.Item href={`/section/accessories`}>ALL ACCESSORIES</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown menuVariant='dark' className='dropdowns' title="FOOTWEAR" id="basic-nav-dropdown">
              <NavDropdown.Item href={`/category/footwear/slippers`}>SLIPPERS</NavDropdown.Item>
              <NavDropdown.Item href={`/category/footwear/sandals`}>SANDALS</NavDropdown.Item>
              <NavDropdown.Item href={`/category/footwear/shoes`}>SHOES</NavDropdown.Item>
              <NavDropdown.Item href={`/category/footwear/slides`}>SLIDES</NavDropdown.Item>
              <NavDropdown.Item href={`/category/footwear/clogs`}>CLOGS</NavDropdown.Item>
              <NavDropdown.Item href={`/section/footwear`}>ALL FOOTWEAR</NavDropdown.Item>
            </NavDropdown>
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

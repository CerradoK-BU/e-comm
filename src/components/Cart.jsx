import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../context/cart.jsx';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ITEMS_PER_PAGE = 6;

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.productPrice * item.quantity, 0);
  };

  const indexOfLastProduct = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE;
  const currentProducts = cartItems.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(cartItems.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToPayment = () =>{
    navigate('/payment');
  }

  return (
    <Container className="mt-4">
      <h1 className="display-2">Cart</h1>
      <Row className="flex flex-col">
        {currentProducts.map((item) => (
          <Col md={4} key={item.id}>
            <Card className="mb-4">
              <Card.Img height={"200px"} variant="top" src={item.imageUrl} alt={item.productName} className="rounded-md h-24" />
              <Card.Body>
                <Card.Title>{item.productName}</Card.Title>
                <Card.Text className='h5'>
                  Price: ₱{item.productPrice}<br />
                  Quantity: {item.quantity}
                </Card.Text>
                <div className="d-flex gap-2 align-items-center">
                  <Button variant="info" onClick={() => addToCart(item)}>+</Button>
                  <Button variant="info" onClick={() => removeFromCart(item)}>-</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {cartItems.length > 0 ? (
        <div className="d-flex flex-column gap-3">
          <h1 className="display-4">Total: ₱{getCartTotal()}</h1>
          <Button style={{ width: "150px" }} variant="info" onClick={clearCart}>Clear cart</Button>
          <div className='d-flex justify-content-center'>
            <Button onClick={goToPayment} style={{ width: "50%" }} variant="info">ORDER NOW</Button>
          </div>
        </div>
      ) : (
        <h1 className="display-5">Your cart is empty</h1>
      )}
      <div className="d-flex justify-content-center mt-4">
        <nav>
          <ul className="pagination">
            {[...Array(totalPages)].map((_, index) => (
              <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Container>
  );
}

Cart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func
};

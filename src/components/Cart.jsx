import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../context/cart.jsx';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.productPrice * item.quantity, 0);
  };

  return (
    <Container className="mt-4">
      <h1 className="display-2 ">Cart</h1>
      <Row className="flex flex-col   ">
        {cartItems.map((item) => (
          <Col md={4} key={item.id}>
            <Card className="mb-4">
              <Card.Img variant="top" src={item.imageUrl} alt={item.productName} className="rounded-md h-24" />
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
        <div className="d-flex flex-column gap-3 " >
          <h1 className="display-4">Total: ₱{getCartTotal()}</h1>
          <Button style={{width: "150px"}} variant="info" onClick={clearCart}>Clear cart</Button>
          <div className='d-flex justify-content-center'>
            <Button style={{width: "50%"}} variant="info">ORDER NOW</Button>
          </div>
        </div>
      ) : (
        <h1 className="display-5">Your cart is empty</h1>
      )}
    </Container>
  );
}

Cart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func
};

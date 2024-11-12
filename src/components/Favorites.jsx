import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/cart.jsx';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

export default function Favorites() {
  const { favoritesItems, addToCart, removeFromFavorites, clearFavorites } = useContext(CartContext);
  const navigate = useNavigate();

  const handleOrderNow = (item) => {
    addToCart(item);
    removeFromFavorites(item);
    navigate('/cart');
  };

  return (
    <Container className="mt-4">
      <h1 className="display-2 text-center">Favorites</h1>
      <Row className="flex flex-col">
        {favoritesItems.map((item) => (
          <Col md={4} key={item.id}>
            <Card className="mb-4">
              <Card.Img variant="top" src={item.imageUrl} alt={item.productName} className="rounded-md h-24" />
              <Card.Body>
                <Card.Title>{item.productName}</Card.Title>
                <Card.Text className='h5'>
                  Price: ₱{item.productPrice}<br />
                  Quantity: {item.quantity} <br />
                  Section: {item.section}
                </Card.Text>
                <Button variant="info" onClick={() => handleOrderNow(item)}>ORDER NOW</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {favoritesItems.length > 0 ? (
        <div className="flex flex-col justify-between items-center">
          <Button variant="info" onClick={clearFavorites}>Clear Favorites</Button>
        </div>
      ) : (
        <h1 className="display-5 mt-3">Add Favorites Now, Order Later</h1>
      )}
    </Container>
  );
}

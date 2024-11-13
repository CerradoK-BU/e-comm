import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/cart.jsx';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const ITEMS_PER_PAGE = 6;
export default function Favorites() {
  const { favoritesItems, addToCart, removeFromFavorites, clearFavorites } = useContext(CartContext);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const handleOrderNow = (item) => {
    addToCart(item);
    removeFromFavorites(item);
    navigate('/cart');
  };

  const indexOfLastProduct = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE;
  const currentProducts = favoritesItems.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(favoritesItems.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container className="mt-4">
      <h1 className="display-2 text-center">Favorites</h1>
      <Row className="flex flex-col">
        {currentProducts.map((item) => (
          <Col md={4} key={item.id}>
            <Card className="mb-4">
              <Card.Img height={"250px"} variant="top" src={item.imageUrl} alt={item.productName} className="rounded-md h-24" />
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

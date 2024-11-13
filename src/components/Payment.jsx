import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <Container className="mt-4">
      <h1 className="display-4 text-center">Payment</h1>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="paymentMethod">
          <Form.Label as="legend" column sm={2}>
            Select Payment Method
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Card Payment"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={handlePaymentChange}
            />
            <Form.Check
              type="radio"
              label="GCash"
              name="paymentMethod"
              value="gcash"
              checked={paymentMethod === 'gcash'}
              onChange={handlePaymentChange}
            />
            <Form.Check
              type="radio"
              label="PayMaya"
              name="paymentMethod"
              value="paymaya"
              checked={paymentMethod === 'paymaya'}
              onChange={handlePaymentChange}
            />
            <Form.Check
              type="radio"
              label="Cash on Delivery"
              name="paymentMethod"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={handlePaymentChange}
            />
          </Col>
        </Form.Group>

        {paymentMethod === 'card' && (
          <>
            <Form.Group className="mb-3" controlId="cardName">
              <Form.Label>Cardholder Name</Form.Label>
              <Form.Control type="text" placeholder="Enter cardholder name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="cardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="text" placeholder="Enter card number" />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="expiryDate">
                  <Form.Label>Expiry Date</Form.Label>
                  <Form.Control type="text" placeholder="MM/YY" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="cvv">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control type="text" placeholder="CVV" />
                </Form.Group>
              </Col>
            </Row>
          </>
        )}

        {paymentMethod === 'gcash' && (
          <Form.Group className="mb-3" controlId="gcashNumber">
            <Form.Label>GCash Number</Form.Label>
            <Form.Control type="text" placeholder="Enter GCash number" />
          </Form.Group>
        )}

        {paymentMethod === 'paymaya' && (
          <Form.Group className="mb-3" controlId="paymayaNumber">
            <Form.Label>PayMaya Number</Form.Label>
            <Form.Control type="text" placeholder="Enter PayMaya number" />
          </Form.Group>
        )}

        {paymentMethod === 'cod' && (
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Delivery Address</Form.Label>
            <Form.Control type="text" placeholder="Enter delivery address" />
          </Form.Group>
        )}

        <Button variant="primary" type="submit">
          Submit Payment
        </Button>
      </Form>
    </Container>
  );
};

export default Payment;

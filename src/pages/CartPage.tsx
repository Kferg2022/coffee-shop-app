import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal, pupCups, updatePupCups, removeAllPupCups } = useCart();

  const handleQuantityChange = (id: number, quantity: number) => {
    updateQuantity(id, quantity);
  };

  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
  };

  const handlePupCupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updatePupCups(Number(e.target.value));
  };

  const cartTotal = getCartTotal();
  const hasNonPupCupItems = cart.some(item => item.name !== 'Pup Cup');
  const isCheckoutDisabled = cartTotal <= 0 || !hasNonPupCupItems;

  useEffect(() => {
    if (!hasNonPupCupItems) {
      removeAllPupCups();
    }
  }, [hasNonPupCupItems, removeAllPupCups]); // Removed unnecessary dependency: cart

  const renderCheckoutButton = () => {
    const buttonProps = {
      variant: "primary",
      size: "lg" as const,
      className: "w-100",
    };

    if (isCheckoutDisabled) {
      return (
        <Button {...buttonProps} disabled>
          Proceed to Checkout
        </Button>
      );
    }

    return (
      <Link to="/checkout">
        <Button {...buttonProps}>
          Proceed to Checkout
        </Button>
      </Link>
    );
  };

  return (
    <Container className="py-5">
      <h1 className="display-4 fw-bold mb-4">Your Cart</h1>
      <Row>
        <Col lg={8}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              {cart.map(item => (
                <div key={item.id} className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <h5>{item.name}</h5>
                    <p className="text-muted">${item.price.toFixed(2)} each</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <Form.Control
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                      className="me-2"
                      style={{ width: '60px' }}
                    />
                    <Button variant="outline-danger" size="sm" onClick={() => handleRemoveItem(item.id)}>
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
              {cart.length === 0 && <p>Your cart is empty.</p>}
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <h2 className="h4 mb-3">Order Summary</h2>
              <p className="d-flex justify-content-between">
                <span>Subtotal:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </p>
              {cartTotal > 0 && (
                <Form.Group className="mb-3">
                  <Form.Label>Pup Cups (free with purchase):</Form.Label>
                  <Form.Select value={pupCups} onChange={handlePupCupChange}>
                    {[0, 1, 2, 3].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              )}
              <hr />
              <p className="d-flex justify-content-between fw-bold">
                <span>Total:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </p>
              {renderCheckoutButton()}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
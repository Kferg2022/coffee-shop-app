import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const CheckoutPage: React.FC = () => {
  const { cart, pupCups, getCartTotal, clearCart } = useCart()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [total, setTotal] = useState(0)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [pickupTime, setPickupTime] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    setTotal(getCartTotal())
  }, [cart, getCartTotal])

  const handlePlaceOrder = () => {
    if (firstName && lastName) {
      const now = new Date()
      now.setMinutes(now.getMinutes() + 10)
      const newPickupTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      setPickupTime(newPickupTime)
      setShowConfirmation(true)
    } else {
      alert('Please enter your first and last name.')
    }
  }

  const handleCloseConfirmation = () => {
    setShowConfirmation(false)
    clearCart()
    setFirstName('')
    setLastName('')
    navigate('/')
  }

  const renderOrderItem = (item: any) => (
    <div key={item.id} className="d-flex justify-content-between align-items-center py-2 border-bottom">
      <div>
        <h5 className="mb-0">{item.name}</h5>
        <small className="text-muted">
          ${item.price.toFixed(2)} x {item.quantity}
        </small>
      </div>
      <span className="font-weight-bold">
        ${(item.price * item.quantity).toFixed(2)}
      </span>
    </div>
  )

  return (
    <Container className="py-5">
      <h1 className="display-4 fw-bold mb-4">Checkout</h1>
      <Row>
        <Col lg={8}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <h2 className="h4 mb-4">Pickup Information</h2>
              <Form>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="firstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="lastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <h2 className="h4 mb-4">Order Details</h2>
              <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {cart.map(renderOrderItem)}
                {pupCups > 0 && (
                  <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                    <div>
                      <h5 className="mb-0">Pup Cups (Free)</h5>
                      <small className="text-muted">
                        $0.00 x {pupCups}
                      </small>
                    </div>
                    <span className="font-weight-bold">$0.00</span>
                  </div>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <h2 className="h4 mb-3">Order Summary</h2>
              <p className="d-flex justify-content-between">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Pup Cups:</span>
                <span>{pupCups > 0 ? `${pupCups} (Free)` : 'None'}</span>
              </p>
              <hr />
              <p className="d-flex justify-content-between fw-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                className="w-100"
                onClick={handlePlaceOrder}
              >
                Place Order
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal 
        show={showConfirmation} 
        onHide={handleCloseConfirmation}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center">Order Confirmed!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h2 className="mb-4">Thank you for your order, {firstName} {lastName}!</h2>
          <p className="lead">Your pickup time is set for {pickupTime}.</p>
          <p>We look forward to serving you soon!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseConfirmation} className="mx-auto">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default CheckoutPage
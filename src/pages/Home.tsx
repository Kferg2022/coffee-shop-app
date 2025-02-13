import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import { useCart } from '../context/CartContext'

const Home: React.FC = () => {
  const { addToCart } = useCart()

  const featuredItems = [
    { id: 1, name: 'Caramel Macchiato', price: 4.95, image: '/images/Caramel Macchiato.png' },
    { id: 2, name: 'Iced Coffee', price: 3.45, image: '/images/Iced Coffee.png' },
    { id: 3, name: 'Cappuccino', price: 3.95, image: '/images/Cappucino.png' },
    { id: 4, name: 'Latte', price: 3.95, image: '/images/Latte.png' },
  ]

  const handleAddToCart = (item: { id: number; name: string; price: number }) => {
    addToCart({ ...item, quantity: 1 })
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Container className="flex-grow-1">
        <section className="text-center py-5 mb-5 bg-light rounded">
          <h1 className="display-4 fw-bold mb-3">Welcome to Coffee Shop</h1>
          <p className="lead text-muted mb-4">Handcrafted beverages and delicious treats await you.</p>
          <Link to="/menu">
          <Button variant="primary" size="lg">View Our Menu</Button>
          </Link>
        </section>

        <section className="mb-5">
          <h2 className="h2 fw-bold mb-4 text-center">Featured Items</h2>
          <Row xs={1} md={2} lg={4} className="g-4">
            {featuredItems.map((item) => (
              <Col key={item.id}>
                <Card className="h-100 shadow-sm border-0 transition-transform hover-lift">
                  <div className="position-relative" style={{ paddingTop: '100%' }}>
                    <Card.Img 
                      variant="top" 
                      src={item.image} 
                      alt={item.name}
                      className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <Card.Body className="d-flex flex-column text-center">
                    <Card.Title className="h5 mb-2">{item.name}</Card.Title>
                    <Card.Text className="mb-3 text-muted">${item.price.toFixed(2)}</Card.Text>
                    <Button 
                      variant="outline-primary" 
                      size="sm" 
                      className="mt-auto"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Order
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </Container>

      <footer className="bg-dark text-light py-4 mt-auto">
        <Container className="text-center">
          <p className="mb-0">&copy; 2023 Coffee Shop. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  )
}

export default Home



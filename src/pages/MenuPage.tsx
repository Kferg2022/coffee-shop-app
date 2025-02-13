import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Coffee, Leaf, Cake } from 'lucide-react'
import { useCart } from '../context/CartContext'

const menuItems = [
  { id: 1, name: 'Espresso', price: 2.50, category: 'coffee', image: '/images/Espresso.png' },
  { id: 2, name: 'Caramel Macchiato', price: 4.95, category: 'coffee', image: '/images/Caramel Macchiato.png' },
  { id: 3, name: 'Iced Coffee', price: 3.45, category: 'coffee', image: '/images/Iced Coffee.png' },
  { id: 4, name: 'Cappuccino', price: 3.95, category: 'coffee', image: '/images/Cappucino.png' },
  { id: 5, name: 'Latte', price: 3.95, category: 'coffee', image: '/images/Latte.png' },
  { id: 6, name: 'Green Tea', price: 2.00, category: 'tea', image: '/images/Green Tea.png' },
  { id: 7, name: 'Earl Grey', price: 2.00, category: 'tea', image: '/images/Earl Grey.png' },
  { id: 8, name: 'Croissant', price: 2.50, category: 'pastry', image: '/images/Croissant.png' },
  { id: 9, name: 'Blueberry Muffin', price: 3.00, category: 'pastry', image: '/images/Blueberry Muffin.png' },
];

const MenuPage: React.FC = () => {
  const { addToCart } = useCart();

  const renderMenuItem = (item: typeof menuItems[0]) => (
    <Col key={item.id}>
      <Card className="h-100 shadow-sm border-0 transition-transform hover-lift">
        <div className="position-relative" style={{ paddingTop: '100%' }}>
          <Card.Img 
            variant="top" 
            src={item.image} 
            alt={item.name}
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/placeholder.png';
              target.onerror = null;
            }}
          />
        </div>
        <Card.Body className="d-flex flex-column text-center">
          <Card.Title className="h5 mb-2">{item.name}</Card.Title>
          <Card.Text className="mb-3 text-muted">${item.price.toFixed(2)}</Card.Text>
          <Button 
            variant="outline-primary" 
            size="sm"
            className="mt-auto"
            onClick={() => addToCart({ ...item, quantity: 1 })}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );

  const renderSection = (title: string, icon: React.ReactNode, items: typeof menuItems) => (
    <section className="mb-5">
      <div className="d-flex align-items-center mb-4">
        {icon}
        <h2 className="h2 fw-bold mb-0 ms-3">{title}</h2>
      </div>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {items.map(renderMenuItem)}
      </Row>
    </section>
  );

  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col className="text-center">
          <h1 className="display-4 fw-bold mb-4">Our Menu</h1>
          <p className="lead text-muted">Discover our handcrafted beverages and delicious treats</p>
        </Col>
      </Row>

      {renderSection("Coffee", <Coffee className="text-primary" size={32} />, menuItems.filter(item => item.category === 'coffee'))}
      {renderSection("Tea", <Leaf className="text-success" size={32} />, menuItems.filter(item => item.category === 'tea'))}
      {renderSection("Pastries", <Cake className="text-warning" size={32} />, menuItems.filter(item => item.category === 'pastry'))}
    </Container>
  )
}

export default MenuPage
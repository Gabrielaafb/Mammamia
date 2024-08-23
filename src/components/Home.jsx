import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardPizza from './CardPizza';
import pizzas from './pizzas';

const Home = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        {pizzas.map((pizza) => (
          <Col xs={12} sm={6} md={4} lg={3} key={pizza.name} className="mb-4">
            <CardPizza
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              className="card"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;


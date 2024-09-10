<<<<<<< HEAD
import CardPizza from "./CardPizza";
import { useEffect, useState } from "react";

function Home() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    const res = await fetch("http://localhost:5000/api/pizzas");
    const pizzas = await res.json();

    setPizzas(pizzas);
  };
=======
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardPizza from './CardPizza';
import pizzas from './pizzas';
import './Home.css'
>>>>>>> 8e0b2b875892a6759ff3251a62a5d71b326c3b4e

  return (
    <div>
    
      <div className="container mt-5">
        <div className="row">
          {pizzas.map((p) => (
            <div className="col-md-4 mb-4" key={p.id}>
              <CardPizza
                img={p.img}
                ingredients={p.ingredients}
                name={p.name}
                price={p.price}
                isHome={true}
                id={p.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
}

export default Home;
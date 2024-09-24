import CardPizza from "../components/CardPizza";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext"; 

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useContext(CartContext); 

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    const res = await fetch("http://localhost:5000/api/pizzas");
    const pizzas = await res.json();
    setPizzas(pizzas);
  };

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
                id={p.id}
                addToCart={() => addToCart(p)} // Pasamos la función addToCart con la pizza como argumento
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

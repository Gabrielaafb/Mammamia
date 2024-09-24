import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import CardPizza from "../components/CardPizza";

function Pizza() {
  const [pizza, setPizza] = useState({});
  const { id } = useParams(); 

  useEffect(() => {
    getPizza();
  }, [id]); 
  const getPizza = async () => {
    const res = await fetch(`http://localhost:5000/api/pizzas/${id}`); 
    const pizzaData = await res.json();
    setPizza(pizzaData);
  };

  return (
    <>
      <div className="mt-5 d-flex justify-content-center">
        {Object.keys(pizza).length > 0 && (
          <CardPizza
            desc={pizza.desc}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            isHome={false}
          />
        )}
      </div>
    </>
  );
}

export default Pizza;

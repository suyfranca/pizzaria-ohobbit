import React from 'react';
import Pizza from '../Pizza/Pizza';
import './Cardapio.css';

function Cardapio() {
  const titleStyle = {
    fontSize: '20px',
    border: '2px solid red',
  }; //CSSinJS

  return (
    <>
      <section className="pizzas">
        <Pizza
          nome="Frodo"
          sabor="Calabresa"
          ingredientes="Molho de tomate, queijo, calabresa, azeitonas"
          valor="39"
        />
        <Pizza
          nome="Isengard"
          sabor="Portuguesa"
          ingredientes="Molho de tomate, queijo, presunto, ovo, azeitonas"
          valor="37"
        />
        <Pizza
          nome="Gandalf"
          sabor="Bacon"
          ingredientes="Molho de tomate, queijo, bacon, azeitonas"
          valor="43"
        />
        <Pizza
          nome="One Ring"
          sabor="Peperoni"
          ingredientes="Molho de tomate, queijo, peperoni, azeitonas"
          valor="42"
        />
        <Pizza
          nome="Bilbo"
          sabor="Margerita"
          ingredientes="Molho de tomate, queijo, manjericão, azeitonas"
          valor="34"
        />
        <Pizza
          nome="Saruman"
          sabor="2 Queijos"
          ingredientes="Molho de tomate, queijos: mussarela e parmesão"
          valor="31"
        />
      </section>
    </>
  );
}

export default Cardapio;

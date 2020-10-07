import React from 'react';
import Button from '../Button/Button';
import './Pizza.css';

function Pizza(props) {
  return (
    <div className="pizza">
      <h1>{props.nome}</h1>
      <p>Sabor: {props.sabor}</p>
      <p>Ingredientes: {props.ingredientes}</p>
      <p>Valor R${props.valor},00</p>
      <Button />
    </div>
  );
}

export default Pizza;

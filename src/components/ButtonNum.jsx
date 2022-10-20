import React from "react";
import "../calculadora.css";

function ButtonNum({ numero ,  agregarNum }) {
  const agregar = (e) => {
    agregarNum(numero);
  };
  return (
    <div>
      <button className="contenedor__calculadora-buttom-num" onClick={agregar}>
        {numero}
      </button>
    </div>
  );
}

export default ButtonNum;

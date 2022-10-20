import React from "react";

function ButtonOperacion({ operacion, displayOperacion }) {
  const enviarOperacion = (e) => {
    displayOperacion(operacion);
  };

  return (
    <div>
      <button
        className="contenedor__calculadora-buttom-num"
        onClick={enviarOperacion}
      >
        {operacion}
      </button>
    </div>
  );
}

export default ButtonOperacion;

import React from "react";

function ButtonRespuesta({operacion, hacerOperacion}) {

    const enviarOperacion = (e) => {
        hacerOperacion();
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

export default ButtonRespuesta;

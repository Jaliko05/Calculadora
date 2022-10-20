import "../calculadora.css"

function Display({displayArriba , displayAbajo}) {
  return (
    <div>
        <div className="contenedor__calculadora-display">
            <div id="contenedor__calculadora-display-arriba">{displayArriba}</div>
            <div id="contenedor__calculadora-display-abajo">{displayAbajo}</div>
          </div>
    </div>
  )
}

export default Display
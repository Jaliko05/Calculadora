import "../calculadora.css";
import { useState } from "react";
import ButtonNum from "./ButtonNum";
import ButtonOperacion from "./ButtonOperacion";
import ButtonRespuesta from "./ButtonRespuesta";
import Display from "./Display";
let valores = [];
let operador = [];
let element;

function Calculadora() {
  const [displayArriba, setdisplayArriba] = useState("");
  const [displayAbajo, setdisplayAbajo] = useState("");

  function agregarNum(num) {
    if (
      displayAbajo == "/" ||
      displayAbajo == "x" ||
      displayAbajo == "-" ||
      displayAbajo == "+"
    ) {
      operador.push(displayAbajo);
      setdisplayAbajo(String(num));
    } else {
      setdisplayAbajo(displayAbajo + String(num));
    }
  }

  function displayOperacion(operador) {
    if (operador == "C") {
      valores = [];
      operador = [];
      setdisplayAbajo("");
      setdisplayArriba("");
    } else if (operador == "🡄") {
      let eliminar = displayAbajo.substring(0, displayAbajo.length - 1);
      setdisplayAbajo(eliminar);
      console.log(eliminar)
    } else {
      setdisplayArriba(displayAbajo);
      valores.push(displayAbajo);
      setdisplayAbajo(operador);
    }
  }

  function hacerOperacion() {
    valores.push(displayAbajo);
    setdisplayAbajo("");
    for (let i = 0; i < valores.length - 1; i++) {
      if (i == 0) {
        element = parseFloat(valores[i], 10);
      }

      if (operador[i] == "x") {
        element = element * parseFloat(valores[i + 1]);
      }
      if (operador[i] == "+") {
        element = element + parseFloat(valores[i + 1]);
      }
      if (operador[i] == "-") {
        element = element - parseFloat(valores[i + 1]);
      }
      if (operador[i] == "/") {
        if (parseFloat(valores[i + 1]) == 0) {
          element = "MATH ERROR";
          break;
        }
        element = element / parseFloat(valores[i + 1]);
      }
    }
    setdisplayArriba(element.toFixed(1));
    valores = [];
    operador = [];
  }

  return (
    <>
      <div className="contenedor">
        <div className="resumen">
          <p>
            ¡Hola! Bienvenido.
            <br />
            <br />
            Esta calculadora hace operaciones basicas de dos numeros, permite
            borrar todo el contenido del display con el boton 'C' o eliminar el
            digito ingresado mas reciente con el boton '&larr;'.
            <br />
            <br />
            Gracias por tu visita.
          </p>
        </div>

        <div className="contenedor__calculadora">
          <Display displayArriba={displayArriba} displayAbajo={displayAbajo} />
          <div className="contenedor__calculadora-buttom">
            <ButtonOperacion
              operacion={"C"}
              displayOperacion={displayOperacion}
            />
            <ButtonOperacion
              operacion={"🡄"}
              displayOperacion={displayOperacion}
            />
            <ButtonOperacion
              operacion={"/"}
              displayOperacion={displayOperacion}
            />
            <ButtonNum numero={7} agregarNum={agregarNum} />
            <ButtonNum numero={8} agregarNum={agregarNum} />
            <ButtonNum numero={9} agregarNum={agregarNum} />
            <ButtonOperacion
              operacion={"x"}
              displayOperacion={displayOperacion}
            />
            <ButtonNum numero={4} agregarNum={agregarNum} />
            <ButtonNum numero={5} agregarNum={agregarNum} />
            <ButtonNum numero={6} agregarNum={agregarNum} />
            <ButtonOperacion
              operacion={"-"}
              displayOperacion={displayOperacion}
            />
            <ButtonNum numero={1} agregarNum={agregarNum} />
            <ButtonNum numero={2} agregarNum={agregarNum} />
            <ButtonNum numero={3} agregarNum={agregarNum} />
            <ButtonOperacion
              operacion={"+"}
              displayOperacion={displayOperacion}
            />
            <ButtonNum numero={0} agregarNum={agregarNum} />
            <ButtonNum numero={"."} agregarNum={agregarNum} />
            <ButtonRespuesta operacion={"="} hacerOperacion={hacerOperacion} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculadora;

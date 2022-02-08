import React, { useContext } from "react";
import { ContextoContador } from "../ContextoContador";

function Contador(props) {
  const [contagem, setContagem] = useContext(ContextoContador);
  return (
    <div>
      <div>{contagem}</div>
      <button
        onClick={() => {
          setContagem((anterior) => anterior - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setContagem((anterior) => anterior + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Contador;

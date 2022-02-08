import React, { useContext } from "react";
import { ContextoContador } from "../ContextoContador";

function Cabecalho(props) {
  const [contagem, setContagem] = useContext(ContextoContador);
  return (
    <div className="cabecalho">
      <h3>Contador</h3>
      <div>{contagem}</div>
    </div>
  );
}

export default Cabecalho;

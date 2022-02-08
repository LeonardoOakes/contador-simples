import React from "react";
import Contador from "./componentes/Contador";
import Cabecalho from "./componentes/Cabecalho";
import "./App.css";
import { ContadorProvedor } from "./ContextoContador";

function App() {
  return (
    <div className="App">
      <ContadorProvedor>
        <Cabecalho></Cabecalho>
        <Contador></Contador>
      </ContadorProvedor>
    </div>
  );
}

export default App;

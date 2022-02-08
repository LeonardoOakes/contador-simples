import React, { useState, createContext } from "react";

export const ContextoContador = createContext();

export function ContadorProvedor(props) {
  const [contagem, setContagem] = useState(0);
  return (
    <ContextoContador.Provider value={[contagem, setContagem]}>
      {props.children}
    </ContextoContador.Provider>
  );
}

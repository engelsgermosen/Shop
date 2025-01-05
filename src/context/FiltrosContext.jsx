import { createContext, useContext, useState } from "react";

// Crear el contexto
export const FiltrosContext = createContext();

// Proveedor del contexto
export const FiltrosProvider = ({ children }) => {
  const [filtros, setFiltros] = useState({
    categoria: [],
    tipo: [],
  });

  return (
    <FiltrosContext.Provider value={{ filtros, setFiltros }}>
      {children}
    </FiltrosContext.Provider>
  );
};

// Hook para usar el contexto fácilmente
export const useFiltros = () => useContext(FiltrosContext);

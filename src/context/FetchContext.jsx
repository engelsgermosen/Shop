import { createContext, useContext, useEffect, useState } from "react";

export const FetchContext = createContext();

export const FetchProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const usefetch = async () => {
      try {
        const response = await fetch("https://api-ten-jet.vercel.app/products");

        if (!response.ok) {
          console.error("Error al obtener productos");
        }
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        setError(error);
      }
    };

    usefetch();
  }, []);

  const searchProduct = (id) => {
    return productos.find((producto) => producto.id == id);
  };

  return (
    <FetchContext.Provider
      value={{
        productos,
        searchProduct,
      }}
    >
      {children}
    </FetchContext.Provider>
  );
};

export const useFetch = () => useContext(FetchContext);

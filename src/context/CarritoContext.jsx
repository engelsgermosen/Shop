import { createContext, useContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const cantidadProductos = () => {
    return carrito.length;
  };

  const agregarProducto = (producto) => {
    const productoExistente = carrito.find((p) => p.id === producto.id);
    if (productoExistente) {
      setCarrito((prevCarrito) =>
        prevCarrito.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        )
      );
      return;
    }
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };

  const eliminarProducto = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito.filter((producto) => producto.id !== id)
    );
  };

  const updateCantidad = (id, cantidad) => {
    if (cantidad < 1) return;
    setCarrito((prevCarrito) =>
      prevCarrito.map((producto) =>
        producto.id === id ? { ...producto, cantidad } : producto
      )
    );
  };

  const calcularTotal = () => {
    return carrito.reduce((acc, producto) => {
      return acc + producto.precio * producto.cantidad;
    }, 0);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };
  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarProducto,
        eliminarProducto,
        calcularTotal,
        updateCantidad,
        vaciarCarrito,
        cantidadProductos,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => useContext(CarritoContext);

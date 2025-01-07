import { Link } from "react-router";
import { useCarrito } from "../context/CarritoContext";

export const Product = ({ producto }) => {
  const { agregarProducto } = useCarrito();

  const handleAddProduct = () => {
    agregarProducto({ ...producto, cantidad: 1 });
  };

  return (
    <div className="flex transition duration-500 ease-in-out flex-col  hover:bg-slate-500 hover:text-white bg-white h-full shadow-md p-4 rounded-md">
      <div className="flex-1">
        <img
          loading="lazy"
          src={producto.image}
          alt={producto.nombre}
          className="w-full aspect-video h-72 object-cover rounded-md"
        />
        <h3 className="text-xl font-bold mt-4 opacity-70">{producto.nombre}</h3>
        <p className="text-lg font-bold mt-2">${producto.precio}</p>
      </div>
      <Link
        className="bg-blue-500 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-md"
        to={`/producto/${producto.id}`}
      >
        Ver detalles
      </Link>
      <button
        className="bg-slate-700 hover:bg-gray-200 hover:text-slate-700/90 text-white font-bold py-2 px-4 mt-4 rounded-md"
        onClick={handleAddProduct}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

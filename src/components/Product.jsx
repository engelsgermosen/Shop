import { Link } from "react-router";
import { useCarrito } from "../context/CarritoContext";
import Swal from "sweetalert2";

export const Product = ({ producto }) => {
  const { agregarProducto } = useCarrito();

  const handleAddProduct = () => {
    agregarProducto({ ...producto, cantidad: 1 });
    Swal.fire({
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  };

  return (
    <div className="flex animate-fade-in transition duration-500 ease-in-out flex-col  hover:bg-slate-500 hover:text-white bg-white h-full shadow-md p-4 rounded-md">
      <Link to={`/producto/${producto.id}`} className="flex-1 flex flex-col">
        <div className="flex-1">
          <img
            loading="lazy"
            src={producto.image}
            alt={producto.nombre}
            className="w-full aspect-video h-72 object-cover rounded-md"
          />
          <h3 className="text-xl font-bold mt-4 opacity-70">
            {producto.nombre}
          </h3>
          <p className="text-lg font-bold mt-2">${producto.precio}</p>
        </div>
        <button className="bg-slate-700 transition duration-300 ease-in-out hover:bg-gray-100 hover:text-slate-700/90 text-white/80 text-center font-semibold py-2 px-4 mt-4 rounded-md">
          Ver detalles
        </button>
      </Link>
      <button
        className="bg-blue-500 transition duration-300 ease-in-out hover:bg-white hover:text-gray-800 text-white   text-center font-bold py-2 px-4 mt-4 rounded-md"
        onClick={handleAddProduct}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

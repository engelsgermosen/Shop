import Trash from "../icons/Trash.svg";
import Plus from "../icons/Plus.svg";
import Minus from "../icons/Minus.svg";
import { useCarrito } from "../context/CarritoContext";
import Swal from "sweetalert2";

export const ProductCarrito = ({ producto, index }) => {
  const { updateCantidad, eliminarProducto } = useCarrito();

  const handleEliminar = () => {
    Swal.fire({
      icon: "warning",
      title: "¿Estas seguro de eliminar este producto de tu carrito?",
      showCancelButton: true,
      confirmButtonText: `Eliminar`,
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Producto eliminado del carrito",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        eliminarProducto(producto.id);
      }
    });
  };

  return (
    <tr
      style={{ animationDelay: `${index * 100}ms` }}
      key={producto.id}
      className="text-center animate-carro text-white bg-gray-700 hover:bg-gray-500"
    >
      <td className="p-1 flex justify-center border border-black">
        {<img className="size-14 aspect-video" src={producto.image} />}
      </td>
      <td className="hidden md:table-cell p-1 border border-black">
        {producto.nombre}
      </td>
      <td className="p-1 border border-black">{producto.precio}</td>
      <td className="p-1 border border-black">
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => updateCantidad(producto.id, producto.cantidad - 1)}
          >
            <img className="border-2 bg-white/90 border-gray-400" src={Minus} />
          </button>
          <span>{producto.cantidad}</span>
          <button
            onClick={() => {
              updateCantidad(producto.id, producto.cantidad + 1);
            }}
          >
            <img className="border-2 bg-white/90 border-gray-400" src={Plus} />
          </button>
        </div>
      </td>
      <td className="p-1 border border-black">
        {producto.precio * producto.cantidad}
      </td>
      <td className="p-1 border border-black bg-red-500/80 hover:bg-red-500">
        <button
          className="flex items-center w-full rounded"
          onClick={handleEliminar}
        >
          <img className="size-8 mx-auto" src={Trash} alt="Eliminar" />
        </button>
      </td>
    </tr>
  );
};

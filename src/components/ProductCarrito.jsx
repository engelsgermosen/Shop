import Trash from "../icons/Trash.svg";
import Plus from "../icons/Plus.svg";
import Minus from "../icons/Minus.svg";
import { useCarrito } from "../context/CarritoContext";
import Swal from "sweetalert2";

export const ProductCarrito = ({ producto }) => {
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
    <tr key={producto.id} className="text-center bg-blue-200 hover:bg-blue-300">
      <td className="p-1 flex justify-center border border-indigo-500/80">
        {<img className="size-14 aspect-video" src={producto.image} />}
      </td>
      <td className="hidden md:table-cell p-1 border border-indigo-500/80">
        {producto.nombre}
      </td>
      <td className="p-1 border border-indigo-500/80">{producto.precio}</td>
      <td className="p-1 border border-indigo-500/80">
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => updateCantidad(producto.id, producto.cantidad - 1)}
          >
            <img className="border-2 bg-white/80 border-gray-400" src={Minus} />
          </button>
          <span>{producto.cantidad}</span>
          <button
            onClick={() => {
              updateCantidad(producto.id, producto.cantidad + 1);
            }}
          >
            <img className="border-2 bg-white/80 border-gray-400" src={Plus} />
          </button>
        </div>
      </td>
      <td className="p-1 border border-indigo-500/80">
        {producto.precio * producto.cantidad}
      </td>
      <td className="p-1 border border-indigo-500/80">
        <button
          className="p-1 bg-red-500 hover:bg-red-700 text-white rounded"
          onClick={handleEliminar}
        >
          <img src={Trash} alt="Eliminar" />
        </button>
      </td>
    </tr>
  );
};

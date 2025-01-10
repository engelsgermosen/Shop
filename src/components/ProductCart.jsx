import { useCarrito } from "../context/CarritoContext";
import { ProductCarrito } from "./ProductCarrito";

export const ProductCart = () => {
  const { carrito } = useCarrito();

  return (
    <div className="flex w-full h-full max-h-[340px] md:max-h-[580px]  overflow-y-scroll">
      <table className="bg-gray-800 h-max w-full border-collapse">
        {carrito && carrito.length > 0 && (
          <thead className="sticky top-0">
            <tr className="bg-indigo-500 text-white/90">
              <th className="hidden md:table-cell"></th>
              <th className="p-2 border border-black">Producto</th>
              <th className="p-2 border border-black">Precio</th>
              <th className="p-2 border border-black">Cantidad</th>
              <th className="p-2 border border-black">Total</th>
              <th className="p-2 border border-black">Accion</th>
            </tr>
          </thead>
        )}
        <tbody className="overflow-y-auto">
          {carrito && carrito.length > 0 ? (
            carrito.map((producto, index) => (
              <ProductCarrito
                index={index}
                key={producto.id}
                producto={producto}
              />
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="text-xl text-white/80 p-2 md:text-2xl text-center"
              >
                No hay productos en el carrito
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductCart;

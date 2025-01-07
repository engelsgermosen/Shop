import { useCarrito } from "../context/CarritoContext";
import { ProductCarrito } from "./ProductCarrito";

export const ProductCart = () => {
  const { carrito } = useCarrito();

  return (
    <div className="flex w-full h-full max-h-[340px] md:max-h-[580px]  overflow-y-scroll">
      <table className="bg-blue-400 h-max w-full border-collapse">
        <thead className="sticky top-0">
          <tr className="bg-blue-500 text-white/90">
            <th className="hidden md:table-cell"></th>
            <th className="p-2 border border-blue-500">Producto</th>
            <th className="p-2 border border-blue-500">Precio</th>
            <th className="p-2 border border-blue-500">Cantidad</th>
            <th className="p-2 border border-blue-500">Total</th>
            <th className="p-2 border border-blue-500">Accion</th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto">
          {carrito && carrito.length > 0 ? (
            carrito.map((producto) => (
              <ProductCarrito key={producto.id} producto={producto} />
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-xl md:text-2xl text-center">
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

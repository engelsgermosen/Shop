import { useCarrito } from "../context/CarritoContext";
import { ProductCarrito } from "./ProductCarrito";

export const ProductCart = () => {
  const { carrito } = useCarrito();

  return (
    <div className="flex w-full max-h-[550px] overflow-y-scroll">
      <table className="bg-blue-400 w-full border-collapse">
        <thead className="sticky top-0">
          <tr className="bg-blue-600 text-white">
            <th></th>
            <th className="p-2 border border-blue-500">Producto</th>
            <th className="p-2 border border-blue-500">Precio</th>
            <th className="p-2 border border-blue-500">Cantidad</th>
            <th className="p-2 border border-blue-500">Total</th>
            <th className="p-2 border border-blue-500">Accion</th>
          </tr>
        </thead>
        <tbody className="max-h-[200px] overflow-y-auto">
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

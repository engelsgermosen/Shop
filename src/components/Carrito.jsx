import { ProductCart } from "./ProductCart";
import { Totales } from "./Totalales";

export const Carrito = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-8 relative">
      <h1 className="text-3xl font-bold text-indigo-500">TU CARRITO</h1>
      <ProductCart />
      <Totales />
    </div>
  );
};

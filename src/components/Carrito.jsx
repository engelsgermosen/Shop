import { ProductCart } from "./ProductCart";
import { Totales } from "./Totalales";

export const Carrito = () => {
  return (
    <div className="flex-1 p-4 h-screen flex flex-col gap-4 md:gap-8 relative">
      <h1 className="text-3xl font-bold text-indigo-500">TU CARRITO</h1>
      <div className="flex flex-1 max-h-screen justify-between flex-col gap-4 md:gap-8">
        <ProductCart />
        <Totales />
      </div>
    </div>
  );
};

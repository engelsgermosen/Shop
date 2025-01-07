import { useCarrito } from "../context/CarritoContext";

export const Totales = () => {
  const { calcularTotal } = useCarrito();

  const subTotal = calcularTotal();
  const tarifa = subTotal != 0 ? 11.99 : 0;
  const total = (Number(subTotal) + tarifa).toFixed(2);

  return (
    <div className="bg-indigo-300 flex flex-col gap-4 py-3 px-4 w-64 rounded absolute bottom-2 right-4">
      <h1 className="font-semibold">TU CARRITO</h1>
      <div className="flex justify-between">
        <div>
          <p className="text-lg font-semibold">Subtotal:</p>
          <p className="text-lg font-semibold">Tarfia de envio:</p>
          <p className="text-xl font-bold">TOTAL</p>
        </div>
        <div>
          <p>{Number(subTotal).toFixed(2)}</p>
          <p>{tarifa}</p>
          <p>{total}</p>
        </div>
      </div>
    </div>
  );
};

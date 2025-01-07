import Swal from "sweetalert2";
import { useCarrito } from "../context/CarritoContext";

export const Totales = () => {
  const { calcularTotal, vaciarCarrito } = useCarrito();

  const subTotal = calcularTotal();
  const tarifa = subTotal != 0 ? 11.99 : 0.0;
  const total = (Number(subTotal) + tarifa).toFixed(2);

  const handlePago = () => {
    if (subTotal === 0) {
      Swal.fire({
        icon: "error",
        title: "No hay productos en el carrito",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
      return;
    }

    Swal.fire({
      icon: "warning",
      title: "¿Estas seguro de realizar el pago?",
      showCancelButton: true,
      confirmButtonText: "Pagar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Pago realizado con éxito",
          text: "Gracias por tu compra",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        vaciarCarrito();
      }
    });
  };

  return (
    <div className="flex justify-end">
      <section className="bg-indigo-300 flex flex-col gap-1 md:gap-4 py-2 px-4 md:py-3 md:px-4 w-full md:w-80 rounded">
        <h1 className="font-semibold">TU CARRITO</h1>
        <div className="flex justify-between">
          <div>
            <p className="text-md md:text-lg font-semibold">Subtotal:</p>
            <p className="text-md md:text-lg font-semibold">Envio:</p>
            <p className="text-md md:text-xl font-bold">TOTAL:</p>
          </div>
          <div>
            <p className="text-md md:text-lg font-semibold">
              {Number(subTotal).toFixed(2)}
            </p>
            <p className="text-md md:text-lg font-semibold">{tarifa}</p>
            <p className="text-xl font-bold">{total}</p>
          </div>
        </div>
        <button
          className="bg-slate-900 hover:bg-gray-200 hover:text-slate-900 text-white/90 font-semibold rounded p-1 md:p-2"
          onClick={handlePago}
        >
          PAGAR
        </button>
      </section>
    </div>
  );
};

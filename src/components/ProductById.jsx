import { useParams } from "react-router";
import { ProductNotFound } from "./ProductNotFound";
import LoadingCircle from "./LoadingCircle";
import { useEffect, useState } from "react";
import { useCarrito } from "../context/CarritoContext";
import Swal from "sweetalert2";

export const ProductById = () => {
  const [producto, setProducto] = useState();
  const [error, setError] = useState();
  const { id } = useParams();
  const { agregarProducto } = useCarrito();

  useEffect(() => {
    const usefetch = async () => {
      try {
        const response = await fetch(
          `https://api-ten-jet.vercel.app/products/${id}`
        );

        if (!response.ok) {
          console.error("Error al obtener productos");
          setError("Error al obtener productos");
        }
        const data = await response.json();
        console.log(data);
        setProducto(data);
      } catch (error) {
        setError(error);
      }
    };

    usefetch();
  }, []);

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

  if (!producto) return <LoadingCircle />;

  if (error) return <ProductNotFound />;

  return (
    <div className="flex flex-1 bg-white/20">
      <aside className="hidden md:flex w-1/4 max-w-[250px] bg-gray-300 pt-4">
        <img
          loading="lazy"
          className="size-32 mx-auto rounded-md"
          src={producto.image}
        />
      </aside>
      <main className="flex-1 flex flex-col lg:flex-row items-center gap-4 p-4">
        <div className="lg:w-[700px]">
          <img
            loading="lazy"
            className="rounded-md border-2 border-gray-400"
            src={producto.image}
          />
        </div>
        <section className="max-w-[600px] lg:w-full md:px-10 lg:p-0 flex flex-col gap-4">
          <h1 className="text-xl font-bold md:text-3xl md:font-semibold">
            {producto.nombre}
          </h1>
          <span className="text-2xl text-purple-600">${producto.precio}</span>
          <p className="text-xl">{producto.descripcion}</p>
          <button
            onClick={handleAddProduct}
            className="bg-blue-500 transition duration-300 ease-in-out hover:bg-white hover:text-gray-800 text-white   text-center font-bold p-3 mt-4 rounded-md text-xl"
          >
            Agregar al carrito
          </button>
          <p className="mt-6 opacity-70">
            Producto 100% original. El pago contra reemboldo esta disponible
            para producto. Politica de devolucion y cambio facil dentro de los 7
            dias.
          </p>
        </section>
      </main>
    </div>
  );
};

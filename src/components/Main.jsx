import { useFiltros } from "../context/FiltrosContext";
import LoadingCircle from "./LoadingCircle";
import { useEffect, useState } from "react";
import MenuHamburger from "../icons/MenuHamburger.svg";
import X from "../icons/X.svg";
import { Product } from "./Product";
import Search from "../icons/Search.svg";

export const Main = () => {
  const { filtros, setFiltros } = useFiltros();
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState();
  const [order, setOrder] = useState("relevante");
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const toggleFiltro = (tipoFiltro, valor) => {
    setFiltros((prevFiltros) => ({
      ...prevFiltros,
      [tipoFiltro]: prevFiltros[tipoFiltro].includes(valor)
        ? prevFiltros[tipoFiltro].filter((item) => item !== valor)
        : [...prevFiltros[tipoFiltro], valor],
    }));
  };

  useEffect(() => {
    const usefetch = async () => {
      try {
        const response = await fetch("https://api-ten-jet.vercel.app/products");

        if (!response.ok) {
          console.error("Error al obtener productos");
        }
        const data = await response.json();
        console.log(data);
        setProductos(data);
      } catch (error) {
        setError(error);
      }
    };

    usefetch();
  }, []);

  const handlePrice = (e) => {
    setOrder(e.target.value);
  };

  const productosFiltrados = productos.filter((producto) => {
    const matchCategoria =
      filtros.categoria.length === 0 ||
      filtros.categoria.includes(producto.categoria);

    const matchTipo =
      filtros.tipo.length === 0 || filtros.tipo.includes(producto.tipo);

    return matchCategoria && matchTipo;
  });

  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    if (order === "Precio mayor a menor") {
      return b.precio - a.precio;
    } else if (order === "Precio menor a mayor") {
      return a.precio - b.precio;
    }
    return 0;
  });

  const productosBuscados = [...productosOrdenados].filter((producto) => {
    return producto.descripcion.toLowerCase().includes(search.toLowerCase());
  });

  const handleBar = () => (isOpen ? "left-0" : "-left-full");

  if (productos.length === 0) return <LoadingCircle />;

  return (
    <main className="flex-1 relative w-full flex flex-col gap-8 p-4 md:p-4">
      <div
        className={`absolute p-8 pt-12 z-10  top-0 ${handleBar()} transition-left backdrop-blur-3xl duration-500 ease-in-out md:hidden  w-full h-full`}
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          <img
            className="size-8 transition duration-300 ease-in-out hover:rotate-90"
            src={X}
          />
        </button>
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl mt-8 font-bold">Filtros</h2>
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">Categorias</h2>
              <div className="flex flex-col gap-4">
                <label className="text-xl">
                  <input
                    className="mr-1"
                    type="checkbox"
                    onChange={() => toggleFiltro("categoria", "Hombres")}
                  />
                  Hombres
                </label>
                <label className="text-xl">
                  <input
                    className="mr-1"
                    type="checkbox"
                    onChange={() => toggleFiltro("categoria", "Mujeres")}
                  />
                  Mujeres
                </label>
                <label className="text-xl">
                  <input
                    className="mr-1"
                    type="checkbox"
                    onChange={() => toggleFiltro("categoria", "Niños")}
                  />
                  Niños
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="flex justify-between flex-col items-center">
        <div className="w-full relative">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-300 rounded-md p-2 pl-4"
            placeholder="Producto..."
          />
          <img className="size-6 absolute top-2 right-4" src={Search} />`
        </div>
        <div className="flex justify-between mt-2 items-center w-full">
          <h2 className="hidden md:block text-2xl lg:text-3xl font-bold">
            Todas las colecciones
          </h2>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="md:hidden"
          >
            <img className="size-8" src={MenuHamburger} />
          </button>
          <div className="flex xs:w-full md:w-auto justify-end items-center md:justify-end gap-2">
            <p className="hidden sm:block">Ordenar por: </p>
            <select onChange={handlePrice} className="p-2 rounded-md">
              <option>Relevante</option>
              <option>Precio mayor a menor</option>
              <option>Precio menor a mayor</option>
            </select>
          </div>
        </div>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productosBuscados.length > 0 ? (
          productosBuscados.map((producto) => (
            <Product key={producto.id} producto={producto} />
          ))
        ) : (
          <h1 className="col-span-3 md:text-xl">
            No existe un producto con esa descripcion
          </h1>
        )}
      </div>
    </main>
  );
};

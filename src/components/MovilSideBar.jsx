import { useFiltros } from "../context/FiltrosContext";
import X from "../icons/X.svg";

export const MovilSideBar = ({ setIsOpen, setFiltros }) => {
  const { filtros } = useFiltros();

  const toggleFiltro = (tipoFiltro, valor) => {
    setFiltros((prevFiltros) => ({
      ...prevFiltros,
      [tipoFiltro]: prevFiltros[tipoFiltro].includes(valor)
        ? prevFiltros[tipoFiltro].filter((item) => item !== valor)
        : [...prevFiltros[tipoFiltro], valor],
    }));
  };

  return (
    <>
      <button onClick={setIsOpen}>
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
                  checked={filtros.categoria.includes("Hombres")}
                  onChange={() => toggleFiltro("categoria", "Hombres")}
                />
                Hombres
              </label>
              <label className="text-xl">
                <input
                  className="mr-1"
                  type="checkbox"
                  checked={filtros.categoria.includes("Mujeres")}
                  onChange={() => toggleFiltro("categoria", "Mujeres")}
                />
                Mujeres
              </label>
              <label className="text-xl">
                <input
                  className="mr-1"
                  checked={filtros.categoria.includes("Niños")}
                  type="checkbox"
                  onChange={() => toggleFiltro("categoria", "Niños")}
                />
                Niños
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

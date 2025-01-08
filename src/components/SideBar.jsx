import { useFiltros } from "../context/FiltrosContext";

export const SideBar = () => {
  const { filtros, setFiltros } = useFiltros();

  const toggleFiltro = (tipoFiltro, valor) => {
    setFiltros((prevFiltros) => ({
      ...prevFiltros,
      [tipoFiltro]: prevFiltros[tipoFiltro].includes(valor)
        ? prevFiltros[tipoFiltro].filter((item) => item !== valor)
        : [...prevFiltros[tipoFiltro], valor],
    }));
  };

  return (
    <aside className="w-1/4 h-full p-4 hidden md:flex flex-col gap-8">
      <h2 className="text-2xl lg:text-3xl mt-8 font-bold">Filtros</h2>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Categorias</h2>
          <div className="flex flex-col gap-4">
            <label>
              <input
                className="mr-1"
                type="checkbox"
                onChange={() => toggleFiltro("categoria", "Hombres")}
              />
              Hombres
            </label>
            <label>
              <input
                className="mr-1"
                type="checkbox"
                onChange={() => toggleFiltro("categoria", "Mujeres")}
              />
              Mujeres
            </label>
            <label>
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
    </aside>
  );
};

import { Link } from "react-router";

export const Product = ({ producto: { id, image, nombre, precio } }) => {
  return (
    <Link to={`/producto/${id}`}>
      <div className="flex transition duration-500 ease-in-out flex-col  hover:bg-slate-500 hover:text-white bg-white h-full shadow-md p-4 rounded-md">
        <div className="flex-1">
          <img
            loading="lazy"
            src={image}
            alt={nombre}
            className="w-full h-72 object-cover rounded-md"
          />
          <h3 className="text-xl font-bold mt-4 opacity-70">{nombre}</h3>
          <p className="text-lg font-bold mt-2">${precio}</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-md">
          Ver detalles
        </button>
      </div>
    </Link>
  );
};

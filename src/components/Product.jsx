export const Product = ({ producto: { image, nombre, precio } }) => {
  return (
    <div className="flex flex-col bg-white shadow-md p-4 rounded-md">
      <div className="flex-1">
        <img
          loading="lazy"
          src={image}
          alt={nombre}
          className="w-full h-72 object-cover rounded-md"
        />
        <h3 className="text-xl font-bold mt-4">{nombre}</h3>
        <p className="text-lg font-bold mt-2">${precio}</p>
      </div>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 mt-4 rounded-md">
        Agregar al carrito
      </button>
    </div>
  );
};

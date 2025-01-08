import { Link, NavLink } from "react-router";
import CartShopping from "../icons/CartShopping.svg";
import { useCarrito } from "../context/CarritoContext";

export const Header = () => {
  const { cantidadProductos } = useCarrito();

  return (
    <header className="w-full bg-gray-800 flex justify-between text-white p-4">
      <Link to="/" className="flex gap-2 items-center">
        <h1 className="text-2xl font-bold">
          EG<span className="text-yellow-400">shop</span>
        </h1>
      </Link>

      <nav className="flex items-center">
        <NavLink className="flex items-center" to={"/carrito"}>
          <button className="relative" onClick={() => navigate("/carrito")}>
            <img src={CartShopping} />
            <p className="absolute -top-3 bg-blue-500 rounded-full size-5 left-[10px] z-10">
              {cantidadProductos()}
            </p>
          </button>
        </NavLink>
      </nav>
    </header>
  );
};

import { Link, NavLink } from "react-router";
import CartShopping from "../icons/CartShopping.svg";

export const Header = () => {
  return (
    <header className="w-full bg-gray-800 flex justify-between text-white p-4">
      <Link to="/" className="flex gap-2 items-center">
        <h1 className="text-2xl font-bold">
          EG<span className="text-yellow-400">shop</span>
        </h1>
      </Link>

      <nav className="flex items-center">
        <NavLink className="flex items-center" to={"/carrito"}>
          <button onClick={() => navigate("/carrito")}>
            <img src={CartShopping} />
          </button>
        </NavLink>
      </nav>
    </header>
  );
};

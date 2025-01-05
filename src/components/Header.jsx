import { Link, useNavigate } from "react-router";
import CartShopping from "../icons/CartShopping.svg";
import Search from "../icons/Search.svg";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full bg-gray-800 flex justify-between text-white p-4">
      <Link to="/">
        <h1 className="text-2xl font-bold">
          EG<span className="text-yellow-400">shop</span>
        </h1>
      </Link>

      <nav className="flex gap-4">
        <button>
          <img src={Search} />
        </button>
        <button onClick={() => navigate("/carrito")}>
          <img src={CartShopping} />
        </button>
      </nav>
    </header>
  );
};

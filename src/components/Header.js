import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const Title = () => {
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  return (
    <div className="flex items-center text-center">
      <a href="/">
        <img
          className="w-20"
          alt="logo"
          src="https://static.vecteezy.com/system/resources/thumbnails/005/513/590/small/catering-quality-food-design-premium-logo-vector.jpg"
        />
      </a>
      <h1 className="px-5 text-3xl font-bold"> Food App </h1>
      {isOnline === true ? (
        <h1 className="font-semibold text-green-400">
          You are Online{" "}
          <span className="font-bold text-green-600">{user.name}</span>
        </h1>
      ) : (
        <h1 className="font-semibold text-red-400">Connection Lost</h1>
      )}
    </div>
  );
};
const Header = () => {
  const [login, setLogin] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="px-5 py-2 flex items-center justify-between">
      <Title />
      <ul className="text-lg flex items-center gap-x-5">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/about2">
          <li>{`About (Class Based)`}</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/cart">
          <li>Cart - {cartItems.length} items</li>
        </Link>
        {login ? (
          <button
            onClick={() => {
              setLogin(false);
            }}
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              setLogin(true);
            }}
          >
            Login
          </button>
        )}
      </ul>
    </div>
  );
};

export default Header;

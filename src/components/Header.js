import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { UserContext, LocationContext } from "../utils/UserContext";
// import { useSelector } from "react-redux/es/hooks/useSelector";
import { useSelector } from "react-redux";
import DropDown from "./uiComponents/Dropdown";
import { cityList } from "../utils/helper";
import { locationDropDown } from "../utils/helper";

export const Title = () => {
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const { location } = useContext(LocationContext);
  const cityDropItems = locationDropDown(cityList);
  return (
    <div className="flex gap-x-2 items-center">
      {/* Logo */}
      <a href="/">
        <img
          className="w-20"
          alt="logo"
          data-testid="logo"
          src="https://static.vecteezy.com/system/resources/thumbnails/005/513/590/small/catering-quality-food-design-premium-logo-vector.jpg"
        />
      </a>
      {/* Online Status */}
      <h1 className="text-3xl font-bold"> Food App </h1>
      {isOnline === true ? (
        <h1 className="font-semibold text-green-400">
          You are Online{" "}
          <span className="font-bold text-green-600">{user.name}</span>
        </h1>
      ) : (
        <h1 className="font-semibold text-red-400">Connection Lost</h1>
      )}

      {/* City List */}
      <DropDown name="City List" items={cityDropItems} />
    </div>
  );
};
const Header = () => {
  const [login, setLogin] = useState(false);
  const { location } = useContext(LocationContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="px-5 py-2 flex items-center justify-between">
      <Title />
      <ul className="text-lg flex items-center gap-x-5">
        <Link to={`/?lat=${28.6550458}&lng=${77.1888201}`}>
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/cart">
          <li>Cart - {cartItems.length} items</li>
        </Link>
        {login ? (
          <button
            data-testid="logout-button"
            onClick={() => {
              setLogin(false);
            }}
          >
            Logout
          </button>
        ) : (
          <button
            data-testid="login-button"
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

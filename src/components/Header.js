import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { UserContext, LocationContext } from "../utils/UserContext";
// import { useSelector } from "react-redux/es/hooks/useSelector";
import { useSelector } from "react-redux";
import DropDown from "./uiComponents/Dropdown";
import { AppLogo, cityList } from "../utils/helper";
import { locationDropDown } from "../utils/helper";

export const Title = () => {
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const { location } = useContext(LocationContext);
  const cityDropItems = locationDropDown(cityList);
  return (
    <div className="flex items-center [&>*]:p-2">
      {/* Logo */}
      <a href="/">
        <AppLogo />
      </a>
      {/* Online Status */}
      <h1 className="text-2xl font-bold text-orange-500">Swiggy Web Page</h1>
      {isOnline === true ? (
        <h1 className="font-semibold text-green-400">
          You are Online{" "}
          <span className="font-bold text-green-600">{user.name}</span>
        </h1>
      ) : (
        <h1 className="font-semibold text-red-400">Connection Lost</h1>
      )}
      {/* City List */}
      <DropDown name={location.city} items={cityDropItems} />
      {/* Message for CORS Extension */}
      <h1 className="font-semibold text-blue-400">
        Enable CORS Extension to see Results
      </h1>
    </div>
  );
};
const Header = () => {
  const [login, setLogin] = useState(false);
  const { location } = useContext(LocationContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="px-5 py-2 h-24 mb-5 flex items-center justify-between fixed top-0 left-0 right-0 bg-white shadow-md">
      <Title />
      <ul className="text-lg flex items-center [&>*]:p-2">
        <Link to={`/?lat=${28.6550458}&lng=${77.1888201}`}>
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact Us</li>
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

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Title = () => {
  return (
    <div className="flex items-center">
      <a href="/">
        <img
          className="w-20"
          alt="logo"
          src="https://static.vecteezy.com/system/resources/thumbnails/005/513/590/small/catering-quality-food-design-premium-logo-vector.jpg"
        />
      </a>
      <h1 className="px-5 text-3xl font-bold"> Food App </h1>
    </div>
  );
};
const Header = () => {
  const [login, setLogin] = useState(false);
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
        <Link to="/contact">
          <li>Contact</li>
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

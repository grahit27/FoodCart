import { Link } from "react-router-dom";
import SocialMediaLinks from "./SocialMediaLink";
const Footer = () => {
  return (
    <div className="py-6 bg-purple-600 text-white">
      <div className="mx-32 grid grid-cols-3 justify-items-center [&>*]:p-3 [&>*]:text-lg">
        <Link to={`/?lat=${28.6550458}&lng=${77.1888201}`}>Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="mt-5 mb-3 ">
        <SocialMediaLinks />
      </div>

      <h1 className="mt-4 text-center">@ 2023 Swiggy</h1>
    </div>
  );
};
export default Footer;

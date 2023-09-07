import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_SRC_URL } from "../config";
import { LoadShimmer } from "./Shimmer";
import useRestaurant, { getResDetails } from "../utils/useRestaurant";
const RestaurantMenu = () => {
  const { resDetails, resMenu } = useRestaurant();
  return !resMenu ? (
    <LoadShimmer />
  ) : (
    <div className="res-menu">
      <h2 className="py-5 text-3xl font-semibold text-center bg-slate-100">
        Restaurant Menu
      </h2>
      <div className="bg-slate-200 flex justify-evenly items-center">
        <h1 className="p-5 text-[40px] font-semibold align-middle">
          {" "}
          {resDetails?.name}, {resDetails?.city}
        </h1>
        <img
          className="m-5 w-[200px] h-[200px] rounded-2xl"
          src={IMG_SRC_URL + resDetails?.cloudinaryImageId}
        />
      </div>
      <div className="py-2 px-5 bg-slate-300 text-center">
        <h1 className="py-2 text-2xl font-semibold ">Menu Items</h1>
        <ul className="py-1 font-medium text-xl">
          {resMenu.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;

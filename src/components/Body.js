import { resCards } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ResCardShimmer } from "./Shimmer";
import { searchResults } from "../utils/helper";
import { getAllRestaurants } from "../utils/restaurantHelper";
import { mockGetResData } from "../utils/mockData";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [searchRes, setSearchRes] = useState([]);
  const { resC } = getAllRestaurants();
  // const { resC } = mockGetResData();
  useEffect(() => {
    setSearchRes(resC);
  }, [resC]);
  console.log("render", resC); // Learn about rendering works

  return !resC || resC.length === 0 ? (
    <ResCardShimmer />
  ) : (
    <>
      <div className="px-5 py-2 flex justify-evenly">
        <h2 className="text-lg font-sans font-semibold">
          {" "}
          Search for Restaurants and Food{" "}
        </h2>
        <input
          className="p-1 border-2"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value); // Render page on change.
          }}
        />
        <button
          className="p-1 font-semibold bg-violet-300 hover:bg-violet-500 rounded-md "
          onClick={() => {
            const data = searchResults(searchText, resC);
            setSearchRes(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap">
        {searchRes.length === 0 ? (
          <h2 className="not-found">No Restaurants found</h2>
        ) : (
          searchRes.map((restaurant) => {
            return (
              <Link
                to={"/restaurants/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;

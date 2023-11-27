import { resCards } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ResCardShimmer } from "./Shimmer";
import { searchResults } from "../utils/helper";
import { getAllRestaurants } from "../utils/restaurantHelper";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [searchRes, setSearchRes] = useState([]);
  const { resC } = getAllRestaurants();
  // Get the Restaurant Data and set it as Search State's initial value
  useEffect(() => {
    setSearchRes(resC);
  }, [resC]);
  console.log("render", resC); // Learn about how rendering works

  return !resC || resC.length === 0 ? (
    <ResCardShimmer />
  ) : (
    <>
      <div className="px-5 py-2 grid grid-cols-4 gap-4">
        <h2 className="text-lg font-sans font-semibold w-full">
          {" "}
          Search for Restaurants and Food{" "}
        </h2>
        <div className="p-2 ring-1 ring-gray-200 hover:ring-gray-400 rounded-lg w-full">
          <input
            className="px-2 w-full outline-0"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value); // Render page on change.
            }}
          />
        </div>
        <button
          data-testid="search-button"
          className="p-1 w-[170px] h-10 font-semibold bg-violet-200 hover:bg-violet-400 rounded-md "
          onClick={() => {
            const data = searchResults(searchText, resC);
            setSearchRes(data);
          }}
        >
          Search
        </button>
      </div>
      {/* RestaurantCard details */}
      <div className="flex flex-wrap" data-testid="resDetails">
        {!searchRes || searchRes.length === 0 ? (
          <h2 className="not-found">No Restaurants found</h2>
        ) : (
          // Initally searchRes contains all restaurant data.
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
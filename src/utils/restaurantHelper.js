import { useState, useEffect } from "react";
export const getAllRestaurants = () => {
  const [resC, setResC] = useState([]);
  useEffect(() => {
    getAllResData();
  }, []);
  const getAllResData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9783692&lng=77.6408356&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const resDetails =
      json.data.cards[5].card.card.gridElements?.infoWithStyle?.restaurants;
    setResC(resDetails);
  };
  return { resC };
};

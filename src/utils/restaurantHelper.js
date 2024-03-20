import { useState, useEffect, useCallback } from "react";
import { createSearchParams } from "react-router-dom";
export const getAllRestaurants = () => {
  const [resC, setResC] = useState();
  const [location, setLocation] = useState({});
  // Extract URL Details
  const query = window.location.search;
  const urlParms = new createSearchParams(query);
  const lat = urlParms.get("lat");
  const lng = urlParms.get("lng");
  const test = "a";

  useEffect(() => {
    setLocation({ lat: lat, lng: lng });
  }, []);

  useEffect(() => {
    getAllResData();
  }, [location]);

  const getAllResData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.lat}&lng=${location.lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();
    const resDetails =
      json.data?.cards[1].card.card.gridElements?.infoWithStyle?.restaurants;
    setResC(resDetails);
  };
  return { resC };
};

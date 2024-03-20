import { createContext } from "react";
import { createSearchParams } from "react-router-dom";
const query = window.location.search;
const urlParms = new createSearchParams(query);
export const UserContext = createContext({
  user: {
    name: "User",
    email: "user@123.com",
  },
});

export const LocationContext = createContext({
  location: !urlParms.get("city")
    ? {
        city: "delhi",
        lat: 28.6550458,
        lng: 77.1888201,
      }
    : {
        city: urlParms.get("city"),
        lat: urlParms.get("lat"),
        lng: urlParms.get("lng"),
      },
});

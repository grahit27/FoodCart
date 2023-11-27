import { createContext } from "react";
import { createSearchParams } from "react-router-dom";
const query = window.location.search;
const urlParms = new createSearchParams(query);
const lat = urlParms.get("lat");

export const UserContext = createContext({
  user: {
    name: "Tester",
    email: "tester@123.com",
  },
});

export const LocationContext = createContext({
  location: {
    city: urlParms.get("city"),
    lat: urlParms.get("lat"),
    lng: urlParms.get("lng"),
  },
});

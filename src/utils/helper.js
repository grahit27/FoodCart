export const searchResults = (searchText, searchRes) => {
  return searchRes.filter((restuarant) => {
    return restuarant.info.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
};
export const shimmerImage =
  "https://static.vecteezy.com/system/resources/thumbnails/005/513/590/small/catering-quality-food-design-premium-logo-vector.jpg";

export const Rupee = ({ price, config }) => (
  <span className={config}> &#x20B9;{price}</span>
);

export const cityList = [
  { name: "bangalore", location: { lat: 12.9715987, lng: 77.5945627 } },
  { name: "delhi", location: { lat: 28.6550458, lng: 77.1888201 } },
  { name: "mumbai", location: { lat: 19.0759837, lng: 72.8776559 } },
  { name: "pune", location: { lat: 18.5204303, lng: 73.8567437 } },
];

export const locationDropDown = (list) => {
  return list.map((item) => ({
    itemName: item.name,
    itemHREF: `/?city=${item.name}&lat=${item.location.lat}&lng=${item.location.lng}`,
  }));
};

// export const getAllRestaurants = async () => {
//   const data = await fetch(
//     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9783692&lng=77.6408356&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//   );
//   const json = await data.json();
//   const resDetails =
//     json.data.cards[5].card.card.gridElements?.infoWithStyle?.restaurants;
//   return resDetails;
// };

export const getRestaurantMenu = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9783692&lng=77.6408356&restaurantId=" +
      resId
  );
  const json = await data.json();
  const resDetails = await json.data?.cards[0].card.card.info;
  const resMenu = await json.data?.cards[2].groupedCard.cardGroupMap.REGULAR
    .cards[1].card.card.itemCards;
  return { resDetails, resMenu };
};

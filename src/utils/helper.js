export const searchResults = (searchText, searchRes) => {
  return searchRes.filter((restuarant) => {
    return restuarant.info.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
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

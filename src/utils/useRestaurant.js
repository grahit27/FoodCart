import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// Merge useRestaurnt into restaurant Helper
const useRestaurant = () => {
  const [resMenu, setResMenu] = useState();
  const [resDetails, setResDetails] = useState();
  const [resId, setResId] = useState();
  const { id } = useParams();
  useEffect(() => {
    setResId(id);
  }, []);

  useEffect(() => {
    getResMenuDetails();
  }, [resId]);

  const getResMenuDetails = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9783692&lng=77.6408356&restaurantId=" +
        resId
    );
    const json = await data.json();
    const extResDetails = json.data?.cards[0].card.card.info;
    const extResMenu =
      json.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards;
    // console.log(extResDetails);
    setResDetails(extResDetails);
    setResMenu(extResMenu);
  };
  return { resDetails, resMenu };
};

export default useRestaurant;

import { IMG_SRC_URL } from "../config";
const RestaurantCard = ({
  name,
  avgRatingString,
  totalRatingsString,
  cloudinaryImageId,
  cuisines,
  id,
}) => {
  return (
    <div className="p-2 m-4 border-2 bg-slate-200 w-[220px] rounded-2xl">
      <img
        className="w-[200px] h-[200px] rounded-2xl"
        src={IMG_SRC_URL + cloudinaryImageId}
      />
      <div className="p-2 ">
        <h2 className="font-bold text-lg truncate">{name}</h2>
        <h3 className="text-sm font-semibold truncate">
          {cuisines.join(", ")}
        </h3>
        <h3 className="font-sans text-sm">Average Rating {avgRatingString}</h3>
        <h3 className="font-sans text-sm">
          Number of Ratings {totalRatingsString}
        </h3>
      </div>
    </div>
  );
};
export default RestaurantCard;

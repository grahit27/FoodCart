// import { IMG_SRC_URL } from "../config"; // Import Issue after saving
const FoodItemCard = ({ name, imageId, category, price, isBestseller }) => {
  return (
    <div className="p-2 m-4 border-2 bg-slate-200 w-[220px] flex-wrap flex-col rounded-2xl">
      <img
        className="w-[200px] h-[200px] rounded-2xl"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          imageId
        }
      />
      <h1 className="text-2xl font-bold">{name}</h1>
      <h1 className="text-xl font-semibold">Category - {category} </h1>
      <h1 className="text-xl font-semibold">Price - Rs.{price / 100} </h1>
      <h1 className="text-xl font-semibold">
        Best Seller -{" "}
        {isBestseller === 1 ? (
          <span className="text-green-500">Yes</span>
        ) : (
          <span className="text-red-500">No</span>
        )}{" "}
      </h1>
    </div>
  );
};
export default FoodItemCard;

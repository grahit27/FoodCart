import { Rupee } from "../utils/helper";
import { getShimmerImage, shimmerImage } from "../utils/helper";
const MenuItemCard = ({ item, handelAddItem }) => {
  const itemInfo = item.card.info;
  const description = itemInfo.description;
  return (
    <div className="flex justify-start py-2 items-center" key={itemInfo.id}>
      {/* Image */}
      <div className="pe-4">
        <img
          className="w-[130px] h-[130px] py-2 rounded-2xl "
          src={
            itemInfo.imageId
              ? "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                itemInfo.imageId
              : shimmerImage
          }
        />
        {/* Add Button */}
        <button
          className="w-[120px] h-auto bg-purple-800 rounded-md text-white "
          onClick={() => handelAddItem(item)}
        >
          Add Item
        </button>
      </div>
      <div className="grid grid-row-4 text-left ">
        {/* Item Veg / Non-Veg */}
        {itemInfo.itemAttribute.vegClassifier === "VEG" ? (
          <span className="text-green-500 text-[18px]">Veg</span>
        ) : (
          <span className="text-red-500 text-[18px]">Non-Veg</span>
        )}

        {/* Item Name */}
        <span className="font-semibold line-clamp-1 text-[18px]">
          {itemInfo.name}
        </span>

        {/* Price */}
        <div>
          <Rupee price={itemInfo.price / 100} config="text-[14px]" />
          <span className="text-[14px] px-2 text-gray-500">
            {description && description.substring(0, description.indexOf("|"))}
          </span>
        </div>

        {/* Description */}

        <div className="text-sm w-[500px] text-left line-clamp-2 pe-4 hover:line-clamp-none">
          {description &&
            description.slice(
              description.indexOf("|") + 1,
              description.lastIndexOf("\n")
            )}
        </div>
      </div>
    </div>
  );
};
export default MenuItemCard;

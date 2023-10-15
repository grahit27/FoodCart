import FoodItemCard from "./FoodItemCard";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
// import { useSelector } from "react-redux/es/hooks/useSelector";
import { LoadShimmer } from "./Shimmer";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handelClearCart = () => dispatch(clearCart());
  return !cartItems ? (
    <LoadShimmer />
  ) : (
    <div className="p-2 m-2">
      <h1 className="justify-center flex text-4xl">Cart Items</h1>

      <div className="flex flex-wrap">
        {cartItems.map((item) => {
          return <FoodItemCard key={item.card.info.id} {...item.card.info} />;
        })}
      </div>
      <div className="justify-center flex">
        <button
          className="p-2 m-2 bg-green-800 rounded-md text-white"
          onClick={() => handelClearCart()}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};
export default Cart;

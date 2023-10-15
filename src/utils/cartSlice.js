import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: "102215767",
            name: "Butter Salt Seedai (200gm)",
            category: "Festival Specials",
            imageId: "ap1bzkddibr389hkymcy",
            inStock: 1,
            isVeg: 1,
            price: 18500,
            variants: {},
            variantsV2: {},
            itemAttribute: {
              vegClassifier: "VEG",
            },
            ribbon: {},
            type: "ITEM",
            itemBadge: {},
            badgesV2: {},
            ratings: {
              aggregatedRating: {
                rating: "4.9",
                ratingCount: "9 ratings",
                ratingCountV2: "9",
              },
            },
          },
          analytics: {},
          hideRestaurantDetails: true,
        },
      },
    ],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

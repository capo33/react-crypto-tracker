import { createSlice } from "@reduxjs/toolkit";

import { IFavouriteState } from "../../interfaces/FavouriteInterface";

const favourites = JSON.parse(localStorage.getItem("favourites") || "[]");

const initialState: IFavouriteState = {
  favourites: favourites || [],
};

const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      const newItem = action.payload;
      console.log(newItem);

      const existingItem = state.favourites.find(
        (favourite) => favourite.uuid === newItem.id
      );
      if (existingItem) {
        state.favourites = state.favourites.map((favourite) =>
          favourite.uuid === newItem.id ? newItem : favourite
        );
      } else {
        state.favourites = [...state.favourites, newItem];
      }
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
    removeFavourite: (state, action) => {
      const id = action.payload.uuid;
      console.log(id);

      const existingItem = state.favourites.filter(
        (favourite) => favourite.uuid !== id
      );
      state.favourites = existingItem;

      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;

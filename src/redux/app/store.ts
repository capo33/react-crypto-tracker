import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import coinReducer from "../features/coinSlice";
import cartReducer from "../features/favouritesSlice";

 export const store = configureStore({
  reducer: {
    coins: coinReducer,
    cart: cartReducer 
   },
});

// 1- Infer the `RootState` and `AppDispatch` types from the store itself

// RootState: The type of the root state of our store (the type of the entire state)
export type RootState = ReturnType<typeof store.getState>;
// AppDispatch: The type of the dispatch function
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

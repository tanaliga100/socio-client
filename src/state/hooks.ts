// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import type { AppDispatch, RootState } from "../main";
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { store } from "../main";

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

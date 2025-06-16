import type { AppDispatch, RootState } from "@/redux/store";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

// Dùng trong component để có type an toàn
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

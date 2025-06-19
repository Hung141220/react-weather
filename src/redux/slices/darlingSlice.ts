import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

const initialState = {
  anchorLinks: [
    'Chuyện Tình Facebook Dating',
    'Tết Nguyên Đán & Tình Yêu Chớm Nở',
    'Cuộc Gặp Định Mệnh',
    'Lời Tỏ Tình Chân Thành',
  ],
};
const darlingSlice = createSlice({
  name: 'darling',
  initialState,
  reducers: {},
});

// export const { setUser, clearUser, setLoading } = darlingSlice.actions;
export default darlingSlice.reducer;

/* selectors */
export const selectAnchorLinks = (state: RootState) => state.darling.anchorLinks;

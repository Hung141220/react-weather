import { createSlice } from "@reduxjs/toolkit";
import img20022025 from "@/assets/img/20022025.png";
import img22022025 from "@/assets/img/22022025.png";
import img28022025 from "@/assets/img/28022025.png";
import imgphototb from "@/assets/img/photoboth.jpg";

const initialState = {
  sliders: [
    {
      img: img20022025,
      title: "Ngày: 20/02/2025",
      desc: "Hôm đó FDate nè, xinh thật sự",
    },
    {
      img: img22022025,
      title: "Ngày: 22/02/2025",
      desc: "Hôm đó mình tặng hoa tuilip nè 🌷",
    },
    {
      img: img28022025,
      title: "Ngày: 28/02/2025",
      desc: "Hôm đó mình đi ăn bánh cuốn, tô tranh ^^",
    },
  ],
};
const infoLove = createSlice({
  name: "infoLove",
  initialState,
  reducers: {},
});
export default infoLove;

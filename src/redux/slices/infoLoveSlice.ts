import { createSlice } from "@reduxjs/toolkit";
import img20022025 from "@/assets/img/20022025.png";
import img22022025 from "@/assets/img/22022025.png";
import img28022025 from "@/assets/img/28022025.png";

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
  content: `Chuyện Tình Facebook Dating Ngày 20 tháng 01 năm 2025, Hùng và Lan
              đã tìm thấy nhau theo một cách thật đặc biệt: qua Facebook Dating.
              Hùng, với trái tim ấm áp và sự tinh tế vốn có, đã ấp ủ một tình
              cảm đặc biệt dành cho Lan ngay từ những dòng tin nhắn đầu tiên.
              Anh bị thu hút bởi nụ cười rạng rỡ, tâm hồn yêu cái đẹp và sự lãng
              mạn toát lên từ Lan – một cô gái chưa một lần nếm trải hương vị
              tình yêu đầu. Lời chào ngây ngô của Hùng, "Chào em, anh thấy em
              quen quen!", đã mở ra cánh cửa cho một câu chuyện tình yêu diệu
              kỳ. Tết Nguyên Đán và Tình Yêu Chớm Nở Tết Nguyên Đán 2025 đến,
              mang theo không khí ấm áp và sum vầy. Trong khi mọi người bận rộn
              với những buổi tiệc tùng, Hùng và Lan lại chọn cách đồng hành cùng
              nhau qua những tin nhắn và cuộc gọi điện thoại mỗi ngày. Hùng say
              sưa lắng nghe Lan kể về những loài hoa rực rỡ trong vườn nhà, về
              những món ăn được chuẩn bị trong những ngày tết. Lan lại bị cuốn
              hút bởi giọng nói trầm ấm, những câu chuyện thú vị và sự quan tâm
              tinh tế của Hùng. Tình yêu của họ cứ thế được nuôi dưỡng, lớn dần
              qua từng cuộc trò chuyện, qua mỗi câu hỏi thăm và qua cả những lời
              chúc ngủ ngon. Tất nhiên, cũng có những lúc họ bất đồng quan điểm,
              những cuộc tranh luận nhỏ tưởng chừng như sẽ chia cắt hai trái tim
              đang dần xích lại gần. Nhưng rồi, bằng một sự kết nối vô hình và
              kỳ diệu, như thể định mệnh đã an bài, Lan và Hùng lại tìm thấy
              tiếng nói chung, vượt qua mọi trở ngại để hiểu nhau hơn. Mỗi lần
              vượt qua thử thách, tình cảm của họ lại càng thêm sâu sắc, bền
              chặt. Cuộc Gặp Gỡ Định Mệnh Ngày 20 tháng 02 năm 2025, tròn một
              tháng kể từ ngày những dòng tin nhắn đầu tiên được gửi đi, Hùng và
              Lan chính thức gặp mặt sau một tháng trò chuyện miệt mài qua màn
              hình điện thoại, không khí không chỉ có sự mong chờ mà còn đong
              đầy một chút ngượng nghịu đáng yêu. Lan hồi hộp trong bộ trang
              phục trắng mình yêu thích, còn Hùng chuẩn bị sẵn một món quà là
              chú gấu nhỏ nhắn, mang biểu cảm mà Lan từng nói là mình muốn “tác
              động” nhất. Khoảnh khắc ánh mắt họ chạm nhau, mọi khoảng cách
              dường như tan biến. Họ trò chuyện thoải mái, tự nhiên như đã thân
              quen từ rất lâu, không chút xa lạ. Lan cảm nhận được sự ấm áp từ
              Hùng, và Hùng thì đắm chìm trong vẻ đẹp tươi sáng, rạng rỡ của
              Lan. Sau buổi gặp mặt đầu tiên ấy, nhận thấy sự hợp nhau về “tần
              số”, những buổi hẹn hò cứ thế nối tiếp nhau, lần thứ hai, lần thứ
              ba… Mỗi lần gặp gỡ là một lần họ khám phá thêm những điều thú vị
              về đối phương, về những sở thích chung, những ước mơ thầm kín.
              Tình yêu không còn chỉ là những dòng tin nhắn hay cuộc gọi, mà đã
              hiện hữu, chân thực và sống động. Lời Tỏ Tình Chân Thành Ngày 07
              tháng 03 năm 2025, trong một buổi chiều lãng mạn dưới ánh đèn lung
              linh ngoài ban công của một quán cà phê hướng ra sông Tô Lịch.
              Hùng đã quyết định bày tỏ lòng mình. Anh không dám nhìn sâu vào
              đôi mắt Lan, nhưng nắm chặt tay cô và nói bằng tất cả sự chân
              thành từ trái tim: "Em có đồng ý chọn anh làm người yêu em
              không?”. Lời tỏ tình giản dị nhưng chứa chan tình cảm của Hùng đã
              chạm đến trái tim Lan. Anh giải thích rằng: “Anh muốn em là người
              được chủ động chọn anh, chứ không phải là em có đồng ý làm người
              yêu anh”. Cô xúc động, và trong khoảnh khắc ấy, tình yêu đầu tiên
              của cô đã đến, một tình yêu ấm áp, tinh tế và lãng mạn đúng như cô
              hằng mơ ước. Lan khẽ gật đầu, nụ cười rạng rỡ trên môi, và cũng
              chính từ khoảnh khắc đó, một câu chuyện tình yêu đẹp như mơ của
              Hùng và Lan chính thức bắt đầu.`,
};
const infoLove = createSlice({
  name: "infoLove",
  initialState,
  reducers: {},
});
export default infoLove;

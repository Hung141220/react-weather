/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Đảm bảo file index.html được quét
    "./src/**/*.{js,ts,jsx,tsx}", // Dòng này cực kỳ quan trọng
    // Nếu bạn có các file component ở ngoài thư mục src (ví dụ: ngay trong gốc),
    // bạn cũng cần thêm chúng vào đây, ví dụ: "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

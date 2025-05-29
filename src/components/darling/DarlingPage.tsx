import { Button, message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import SimpleSlider from "../slick/SimpleSlider";

function DarlingPage() {
  const [messageApi, contextHolder] = message.useMessage();
  const btnNo = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ top: "100%", left: "100%" });
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showBtn, setShowBtn] = useState(true);
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    messageApi.info("Hello, Ngọc Lan!");
    messageApi.info("Có yêu mình không ?");
  }, []);

  // Hàm tạo vị trí ngẫu nhiên
  const generateRandomPosition = () => {
    // Lấy kích thước của cửa sổ trình duyệt
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const buttonWidth = 170;
    const buttonHeight = 60;

    // Tạo tọa độ ngẫu nhiên trong phạm vi an toàn
    const randomTop = Math.random() * (viewportHeight - buttonHeight);
    const randomLeft = Math.random() * (viewportWidth - buttonWidth);

    // Tạo góc xoay ngẫu nhiên (ví dụ từ -10 đến 10 độ)
    const randomRotation = (Math.random() - 0.5) * 20; // Từ -10 đến 10

    return {
      top: `${randomTop}px`,
      left: `${randomLeft}px`,
      rotation: randomRotation,
    };
  };

  const handleFocus = (e) => {
    messageApi.error("😒😒😒😒 giỏi rồi");
    setIsHovered(true);
    const newRandomPosition = generateRandomPosition();
    setPosition({
      top: newRandomPosition.top,
      left: newRandomPosition.left,
    });
    setRotation(newRandomPosition.rotation);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    // messageApi.destroy();
  };

  const handleMouseEnterYes = () => {
    messageApi.destroy();
    messageApi.success("Yêu em nhiều lắm! ❤️");
    setIsHovered(false);
  };
  const handleClickYes = () => {
    messageApi.destroy();
    messageApi.success("Yêu em nhiều lắm! ❤️");
    setShowBtn(false);
    setShowSlider(true);
  };

  return (
    <div className="position-relative">
      {contextHolder}
      {showBtn && (
        <>
          <Button
            style={{
              position: "absolute", // Sử dụng absolute để định vị tự do
              top: position.top, // Áp dụng top từ state
              left: position.left, // Áp dụng left từ state
              // margin: "15px 30px",
              // fontSize: "20px",
              cursor: "default",
              transition:
                "top 0.5s ease-out, left 0.5s ease-out, transform 0.5s ease-out",
              transform: `translate(-100%, -100%) rotate(${rotation}deg) ${isHovered ? "scale(1.05)" : "scale(1)"}`, // Phóng to nhẹ khi hover
              zIndex: 1000000, // Đảm bảo button hiển thị trên các phần tử khác
            }}
            ref={btnNo}
            type="dashed"
            danger
            onMouseEnter={handleFocus}
            onMouseLeave={handleMouseLeave}
          >
            NOOOOOO
          </Button>
          <div className="text-center mt-96">
            <Button
              className=""
              type="primary"
              onMouseEnter={handleMouseEnterYes}
              onClick={handleClickYes}
            >
              Ẻm đồng ý
            </Button>
          </div>
        </>
      )}
      {showSlider && <SimpleSlider />}
    </div>
  );
}

export default DarlingPage;

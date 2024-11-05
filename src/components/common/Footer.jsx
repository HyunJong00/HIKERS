import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/images/icon-home.svg";
import { ReactComponent as UserIcon } from "../../assets/images/icon-usertwo.svg";
import { ReactComponent as Mount } from "../../assets/images/icon-mount.svg";
import { ReactComponent as Navi } from "../../assets/images/icon-navi.svg";
import { ReactComponent as Inquiry } from "../../assets/images/icon-inquiry.svg";
import { ReactComponent as HomeIconA } from "../../assets/images/icon-home-activate.svg";
import { ReactComponent as UserIconA } from "../../assets/images/icon-usertwo-activate.svg";
import { ReactComponent as MountA } from "../../assets/images/icon-mount-activate.svg";
import { ReactComponent as NaviA } from "../../assets/images/icon-navi-activate.svg";
import { ReactComponent as InquiryA } from "../../assets/images/icon-inquiry-activate.svg";

// 메뉴 아이템 컴포넌트
const FooterItem = ({ Icon, ActiveIcon, text, isActive, onClick }) => {
  const IconComponent = isActive ? ActiveIcon : Icon;
  return (
    <div style={styles.menuItem} onClick={onClick}>
      <IconComponent style={styles.icon} />
      <span style={styles.text}>{text}</span>
    </div>
  );
};

// 메뉴 컴포넌트
const Footer = ({ activeItem: initialActiveItem }) => {
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 훅
  const [activeItem, setActiveItem] = useState(initialActiveItem || "home"); // props로 받은 초기 활성화 메뉴 설정

  const menuItems = [
    {
      name: "home",
      Icon: HomeIcon,
      ActiveIcon: HomeIconA,
      text: "홈",
      path: "/H100S",
    },
    {
      name: "inquiry",
      Icon: Inquiry,
      ActiveIcon: InquiryA,
      text: "기록",
      path: "/R273C",
    },
    {
      name: "navi",
      Icon: Navi,
      ActiveIcon: NaviA,
      text: "네비게이션",
      path: "/M200C",
    },
    {
      name: "mount",
      Icon: Mount,
      ActiveIcon: MountA,
      text: "오르락월드",
      path: "/game",
    },
    {
      name: "user",
      Icon: UserIcon,
      ActiveIcon: UserIconA,
      text: "커뮤니티",
      path: "/C300S",
    },
  ];

  const handleClick = (name, path) => {
    setActiveItem(name); // 활성화 상태 업데이트
    navigate(path); // 경로 이동
  };

  return (
    <div style={styles.menu}>
      {menuItems.map((item, index) => (
        <FooterItem
          key={index}
          Icon={item.Icon}
          ActiveIcon={item.ActiveIcon}
          text={item.text}
          isActive={item.name === activeItem}
          onClick={() => handleClick(item.name, item.path)} // 클릭 시 활성화 및 경로 이동
        />
      ))}
    </div>
  );
};

// 스타일 정의
const styles = {
  menu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#fff",
    width: "100%",
    justifyContent: "space-around",
    borderTop: "1px solid #dadada",

    position: "sticky",
    width: "100%",
    bottom: 0,
  },
  menuItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    width: "60px",
    boxSizing: "border-box",
  },
  icon: {
    width: "30px",
    height: "30px",
  },
  text: {
    fontSize: "8px",
    fontWeight: "bold",
  },
};

export default Footer;

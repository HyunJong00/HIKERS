import styled from "styled-components";

import Home from "../../assets/menubar/Home.svg";
import Navigation from "../../assets/menubar/Navigation.svg";
import League from "../../assets/menubar/League.png";
import World from "../../assets/menubar/World.png";
import Community from "../../assets/menubar/Community.svg";

export default function MenuBar() {
  const menus = ["홈", "내비게이션", "등반의 장", "오르락 월드", "커뮤니티"];
  const images = {
    홈: Home,
    내비게이션: Navigation,
    "등반의 장": League,
    "오르락 월드": World,
    커뮤니티: Community,
  };

  // Content를 누르면 그에 맞는 페이지로 전환
  const onClick = () => {};

  return (
    <Container>
      {menus.map((menu) => (
        <Content onClick={onClick}>
          <img src={images[menu]} alt={menu} height="25px" />
          <Text>{menu}</Text>
        </Content>
      ))}
    </Container>
  );
}

const Container = styled.div`
  padding: 10px 0 10px 0;
  border-top: 1px solid #dadada;
  background-color: #fff;
  display: flex;
  width: 100%;
`;

const Content = styled.div`
  flex: 1;
  text-align: center;
`;

const Text = styled.div`
  color: #000;
  font-family: "Paperlogy-4";
  font-size: 11.49px;
  font-style: normal;
  line-height: 15.32px; /* 133.333% */
`;

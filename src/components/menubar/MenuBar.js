import styled from "styled-components";

import Home from "../../assets/menubar/Home.svg";
import Discovery from "../../assets/menubar/Discovery.svg";
import Navigation from "../../assets/menubar/Navigation.svg";
import World from "../../assets/menubar/World.png";
import Community from "../../assets/menubar/Community.svg";

function MenuBar() {
  const menus = ["홈", "탐색하기", "내비게이션", "오르락 월드", "커뮤니티"];
  const images = {
    홈: Home,
    탐색하기: Discovery,
    내비게이션: Navigation,
    "오르락 월드": World,
    커뮤니티: Community,
  };

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
  border: 0.6px solid #959595;
  display: flex;
  width: 100%;
`;

const Content = styled.div`
  flex: 1;
  text-align: center;
`;

const Text = styled.div`
  color: var(--normal, #19191b);
  text-align: center;
  font-family: Paperslogy;
  font-size: 13.2px;
  font-style: normal;
  sfont-weight: 400;
  line-height: 17.6px; /* 133.333% */
  letter-spacing: -1.5px;
  white-space: nowarp;
`;

export default MenuBar;

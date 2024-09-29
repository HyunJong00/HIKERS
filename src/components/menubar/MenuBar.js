import styled from "styled-components";

import Home from "../../assets/Home.svg";
import Discovery from "../../assets/Discovery.svg";
import Navigation from "../../assets/Navigation.svg";
import World from "../../assets/World.png";
import Community from "../../assets/Community.svg";

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
    <Container style={{ display: "flex", width: "100%" }}>
      {menus.map((menu) => (
        <div
          style={{
            flex: 1,
            textAlign: "center",
          }}
          onClick={onClick}
        >
          <img src={images[menu]} alt={menu} height="25px" />
          <Text>{menu}</Text>
        </div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  padding: 10px 0 10px 0;
  border: 0.6px solid #959595;
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

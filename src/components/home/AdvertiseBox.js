import styled from "styled-components";

import advertise from "../../assets/advertisebox/advertise-example.png";

import { GlobalColor } from "../../GlobalStyles";

const advertise_example = [advertise, advertise, advertise];

export default function AdvertiseBox() {
  return (
    <Container>
      <Paging />
      <Slider>
        {/* {advertise_example.map((img, i) => (
          <img src={img} />
        ))} */}
      </Slider>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 10px;
  height: 150px;
  background-color: ${GlobalColor.GrayScale[40]};
`;

const Slider = styled.div`
  // 나중에 슬라이드 되게 바꿔야 함

  // display: flex;
  // flex-wrap: nowrap;

  img {
    width: 100%;
    height: 100%;
    overflow: hidden; // 보더까지 hidden되게 하고싶다.
  }
`;

const Paging = styled.div`
  // 나중에 추가
`;

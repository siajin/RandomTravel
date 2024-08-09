import styled from "styled-components";

export const Small = styled.div`
  height: 20px;
  width: 40px;
  font-size: 10px;
`;

export const Medium = styled.div`
  height: 30px;
  width: 50px;
  font-size: 15px;
`;

export const Large = styled.div`
  height: 40px;
  width: 60px;
  font-size: 20px;
`;

export const RoundBox = styled.div`
  height: inherit;
  width: inherit;
  background-color: gray;
  border-radius: 5px;
`;

// <BaseBox property={boxPorperties.small} ></BaseBox>

// boxPorperties = {
//     'small': [20, 40, 10, 6],
//     'medium': [30, 50, 15, 7],
// }

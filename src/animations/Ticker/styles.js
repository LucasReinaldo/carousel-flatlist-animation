import styled from "styled-components/native";
import { TICKER_HEIGHT } from "../../global.styles";

export const Container = styled.View`
  position: absolute;
  top: 40px;
  left: 20px;
  overflow: hidden;
  height: ${TICKER_HEIGHT}px;
`;

export const Text = styled.Text`
  font-size: ${TICKER_HEIGHT}px;
  line-height: ${TICKER_HEIGHT}px;
  text-transform: uppercase;
  font-weight: 800;
`;

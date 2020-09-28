import styled from "styled-components/native";
import { Animated } from "react-native";

import { DOT_SIZE } from "../../global.styles";

export const Container = styled.View`
  position: absolute;
  right: 20px;
  bottom: 40px;
  flex-direction: row;
  height: ${DOT_SIZE}px;
`;

const CircledDot = styled.View`
  width: ${DOT_SIZE}px;
  height: ${DOT_SIZE}px;
  border-bottom-width: 3px;
  border-color: #DDDD;
  position: absolute; /* to be over the item, because they have the same width  and height on screen*/
`;

export const AnimatedDotPagination = Animated.createAnimatedComponent(
  CircledDot
);

export const PaginationContainer = styled.View`
  width: ${DOT_SIZE}px;
  align-items: center;
  justify-content: center;
`;

export const PaginationDot = styled.View`
  width: ${DOT_SIZE * 0.3}px;
  height: ${DOT_SIZE * 0.3}px;
  border-radius: ${DOT_SIZE * 0.15}px;
`;

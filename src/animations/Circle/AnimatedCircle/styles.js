import styled from "styled-components/native";
import { Animated } from "react-native";

import { CIRCLE_SIZE } from "../../../global.styles";

const Container = styled.View`
  width: ${CIRCLE_SIZE}px;
  height: ${CIRCLE_SIZE}px;
  border-radius: ${CIRCLE_SIZE / 2}px;
  position: absolute;
  top: 15%;
`;

export const Circle = Animated.createAnimatedComponent(Container);
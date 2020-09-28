import styled from "styled-components/native";
import { Animated, FlatList } from "react-native";

import { LOGO_HEIGHT, LOGO_WIDTH } from "../../global.styles";

export const Container = styled.View`
  flex: 1;
`;

export const Logo = styled.Image`
  opacity: 0.9;
  height: ${LOGO_HEIGHT / 1.9}px;
  width: ${LOGO_WIDTH}px;
  position: absolute;
  left: 10px;
  bottom: 10px;
`;

export const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
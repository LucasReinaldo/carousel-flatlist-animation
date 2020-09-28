import styled from "styled-components/native";
import { Animated } from "react-native";

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const AnimatedContainer = Animated.createAnimatedComponent(Container);

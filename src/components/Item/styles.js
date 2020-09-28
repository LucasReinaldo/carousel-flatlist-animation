import styled from "styled-components/native";
import { Animated } from 'react-native';

import { width, height } from "../../global.styles";

export const Container = styled.View`
  align-items: center;
  height: ${height}px;
  justify-content: center;
  width: ${width}px;
`;

const TextContainer = styled.View`
  align-items: flex-start;
  align-self: flex-end;
  flex: 0.5;
`;

export const AnimatedTextContainer = Animated.createAnimatedComponent(TextContainer);

const Image = styled.Image`
  flex: 1;
  height: ${width * 0.75}px;
  width: ${width * 0.75}px;
`;

export const AnimatedImage = Animated.createAnimatedComponent(Image);

const Heading = styled.Text`
  color: #444;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

export const AnimatedHeading = Animated.createAnimatedComponent(Heading);

const Description = styled.Text`
  color: #a6a6a6;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-right: 10px;
  text-align: left;
  width: ${width * 0.75}px;
`;

export const AnimatedDescription = Animated.createAnimatedComponent(Description);

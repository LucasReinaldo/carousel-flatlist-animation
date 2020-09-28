import React from "react";
import { Animated } from "react-native";

import { TICKER_HEIGHT, width } from "../../global.styles";

import { Container, Text } from "./styles";

const Ticker = ({ scrollListX, data }) => {
  const inputRange = [-width, 0, width]; //moving according to the size/time of the scroll (velocity)

  const translateY = scrollListX.interpolate({
    inputRange,
    outputRange: [TICKER_HEIGHT, 0, -TICKER_HEIGHT], //transition of the same size of the font for each element
  });
//change/comment overflor and height in styles to understand

  return (
    <Container>
      <Animated.View style={{ transform: [{ translateY }] }}>
        {data.map(({ type }, index) => (
          <Text key={index}>{type}</Text>
        ))}
      </Animated.View>
    </Container>
  );
};

export default Ticker;

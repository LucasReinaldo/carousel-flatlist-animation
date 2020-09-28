import React from "react";

import { width } from "../../../global.styles";

import { Circle } from "./styles";

const AnimatedCircle = ({ index, color, scrollListX }) => {
  const inputRange = [
    (index - 0.6) * width,
    index * width,
    (index + 0.6) * width,
  ];

  const scale = scrollListX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
    extrapolate: "clamp", // stick the array with the same values, without clamp, the array would be [-1, 0, -1], [-2, -1, -2]...
  });

  const opacity = scrollListX.interpolate({
    inputRange,
    outputRange: [0, 0.5, 0],
  });

  return (
    <Circle
      style={{ backgroundColor: color, opacity, transform: [{ scale }] }}
    />
  );
};

export default AnimatedCircle;

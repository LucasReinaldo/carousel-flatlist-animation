import React from "react";
import { StyleSheet } from "react-native";

import AnimatedCircle from './AnimatedCircle';

import { AnimatedContainer } from "./styles";

const Circle = ({ data, scrollListX }) => {
  return (
    <AnimatedContainer style={[StyleSheet.absoluteFillObject]}>
      {data.map(({ color }, index) => (
        <AnimatedCircle
          key={index}
          index={index}
          color={color}
          scrollListX={scrollListX}
        />
      ))}
    </AnimatedContainer>
  );
};

export default Circle;

import React from "react";
import { DOT_SIZE, width } from "../../global.styles";

import {
  Container,
  AnimatedDotPagination,
  PaginationContainer,
  PaginationDot,
} from "./styles";

const Pagination = ({ data, scrollListX }) => {
  
  const translateX = scrollListX.interpolate({
    inputRange: [-width, 0, width],
    outputRange: [-DOT_SIZE, 0, DOT_SIZE],
  });

  return (
    <Container>
      <AnimatedDotPagination style={{ transform: [{ translateX }] }} />
      {data.map((item) => (
        <PaginationContainer key={item.key}>
          <PaginationDot style={{ backgroundColor: item.color }} />
        </PaginationContainer>
      ))}
    </Container>
  );
};

export default Pagination;

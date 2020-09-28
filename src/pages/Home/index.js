import React, { useRef } from "react";
import { Animated } from "react-native";

import Item from "../../components/Item";
import Pagination from "../../components/Pagination";

import { Container, Logo, AnimatedFlatList } from "./styles";

import { LOGO_HEIGHT, LOGO_WIDTH } from "../../global.styles";

import data from "../../../data";
import Ticker from "../../animations/Ticker";
import Circle from "../../animations/Circle";

const Home = () => {
  const scrollListX = useRef(new Animated.Value(0)).current;

  return (
    <Container>
      <Circle data={data} scrollListX={scrollListX} />
      <AnimatedFlatList
        keyExtractor={(item) => item.key}
        data={data}
        renderItem={({ item, index }) => (
          <Item {...item} index={index} scrollListX={scrollListX} />
        )}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollListX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      />
      <Logo
        source={require("../../../assets/ue_black_logo.png")}
        style={{
          resizeMode: "contain",
          transform: [
            { translateX: -LOGO_WIDTH / 2 },
            { translateY: -LOGO_HEIGHT / 2 },
            { rotateZ: "-90deg" },
            { translateX: LOGO_WIDTH / 2 },
            { translateY: LOGO_HEIGHT / 2 },
          ],
        }}
      />
      <Pagination data={data} scrollListX={scrollListX} />
      <Ticker data={data} scrollListX={scrollListX} />
    </Container>
  );
};

export default Home;

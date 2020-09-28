import React from "react";
import { View } from 'react-native';

import "intl";
import "intl/locale-data/jsonp/en";

import Routes from "./src/routes";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style='auto' translucent animated />
      <Routes />
    </View>
  );
}

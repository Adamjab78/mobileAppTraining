import React from "react";
import { View } from "react-native";


const Footer = () => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, backgroundColor: "magenta" }}></View>
      <View style={{ flex: 1, backgroundColor: "turquoise" }}></View>
    </View>
  );
};

export default Footer;

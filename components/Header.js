import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Header = ({title}) => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1 ,}}></View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight:"bold", fontSize: 25, color: "dimgrey" }}>{title}</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center",}}>

      <Ionicons name="person" size={30} color="dimgrey" />
      </View>
    </View>
  );
};

export default Header;

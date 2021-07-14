import React from "react";
import { View } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import Schedule from "../components/Schedule";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header title={"Home"}/>
      <View style={{ flex: 5,  }}>
        <Profile />
        <Schedule />
      </View>

      <Footer />
    </View>
  );
};


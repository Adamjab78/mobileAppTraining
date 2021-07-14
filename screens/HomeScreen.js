import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Schedule from "../components/Schedule";
import { Ionicons } from "@expo/vector-icons";


export default function HomeScreen({navigation}) {
  
  const goToCourses = () => {
    navigation.navigate("Courses");
  };

  return (
    <View style={{ flex: 1 , }}>
      <Header title={"Home"} iconTitle={"home"} /> 
     
      <View style={{ flex: 5,  }}>
        <Profile />
        <Schedule goToCourses={goToCourses} />
      </View>     
    </View>
  );
}
/* <Header title={"Home"} />*/
import React from "react";
import { View, FlatList, Text } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import courses from "../data/courses"
import { blue } from "ansi-colors";


export default function CoursesScreen() {
  return (
    
    <View style={{ flex: 1 }}>
      <Header title={"Courses"} iconTitle={"book-outline"} />
      <View style={{ flex: 5 }}>
        <FlatList
          data={courses}
          renderItem={({ item }) => <CourseCard item={item} />}
        />
      </View>
    </View>
  );
}

const CourseCard = ({ item }) => {
  return (
    <View
      style={{
          backgroundColor: "gainsboro",
        borderColor: "grey",
        marginBottom: 20,
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 10,
      }}
    >
      <Text style={{fontWeight:"bold"}}> {item.title}</Text>
      <Text style={{color:"blue"}}> {item.lecturer}</Text>
      <Text style={{fontSize:10}}> {item.description}</Text>
    </View>
  );
};
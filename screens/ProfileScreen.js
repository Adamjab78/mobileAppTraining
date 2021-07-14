import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import courses from "../data/courses"
import { blue } from "ansi-colors";
import { Ionicons } from '@expo/vector-icons';


export default function ProfileScreen() {
    const [name, setName] = useState(null);
  
    const showContent=()=>{
        Alert.alert(`nama : ${name}`)
    }
  
    return (
      <View style={{ flex: 1 }}>
       
       <Header title={"Profile"} iconTitle={"person-outline"} /> 
        
        <View style={{ flex: 5 }}>
          <Text style={{ marginHorizontal: 10,padding: 5,marginBottom: 10, marginTop: 10, fontSize :18,color: "darkblue"}}>
            Name :
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "lightgrey",
              marginHorizontal: 10,
              padding: 5,
              marginBottom: 10,
            }}
            onChangeText={(value) => setName(value)}
            value={name}
          />
  
          <TouchableOpacity
            style={{
              marginHorizontal: 10,
              padding: 20,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              backgroundColor: "lightskyblue",
            }}
            onPress={()=>showContent()}
          >
            <Text style={{ fontWeight:"bold", fontSize: 17, color: "white" }}>SUBMIT</Text>
          </TouchableOpacity>
  
        </View>
       
      </View>
    );
  }
  
  const CourseCard = ({ item }) => {
    return (
      <View
        style={{
          marginBottom: 20,
          borderWidth: 1,
          borderColor: "lightgrey",
          padding: 10,
          marginHorizontal: 10,
          backgroundColor: "gainsboro",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
        <Text style={{ color: "blue" }}>{item.lecturer}</Text>
        <Text>{item.description}</Text>
      </View>
    );
  };
  /*<Header title={"Profile"} />*/
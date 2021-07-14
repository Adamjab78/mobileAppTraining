import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Profile = () => {
  return (
    <View style={{ flex: 1, margin: 10  }}>
      <Text style={{ flex: 1,marginBottom: 10, fontWeight: "bold", fontSize:18, color: "darkblue" }}>Profile</Text>
      <View
        style={{
          flex: 5,
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1 }}>
          <Image source={require('../assets/img1.jpg')}
            /*source={{uri:"https://picsum.photos/200"}}*/
            style={{ width: 100, height: 100 }}
            resizeMode={"cover"}
          />
        </View>
        <View style={{ flex: 2, }}>
          <Text style={{ marginBottom: 10,fontWeight: "bold",fontSize:15, color: "darkblue"}}>Mohd Adam Bin Jab</Text>
          <Text style={{ marginBottom: 10, color: "darkblue"}}>Trainee</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

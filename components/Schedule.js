import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Schedule = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScheduleRow day={"Monday"} morning={"Physics"} afternoon={"Language"} />
      <ScheduleRow day={"Tuesday"} morning={"Mathematics"} afternoon={"Communication"}/>
      <ScheduleRow day={"Wednesday"} morning={"Science"} afternoon={"History"}/>
      <ScheduleRow day={"Thursday"} morning={"Malay"} afternoon={"Geography"}/>
      <ScheduleRow day={"Friday"} morning={"English"} afternoon={"Electronics"}/>
     
    </View>
  );
};

const ScheduleRow = ({ day, morning, afternoon }) => {
  return (
    <View style={{ flex: 1, flexDirection: "row",margin:10 }}>
      <View style={{ flex: 1 }}>
        <Text  style={{ marginBottom: 10, color: "darkblue"}}>{day}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ marginBottom: 10, color: "darkblue"}}>{morning}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ marginBottom: 10, color: "darkblue"}}>{afternoon}</Text>
      </View>
    </View>
  );
};

export default Schedule;

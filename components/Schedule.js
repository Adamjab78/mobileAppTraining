import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Schedule = ({ goToCourses }) => {
  return (
    <View style={{ flex: 2, backgroundColor:"honeydew",margin: 10 }}>
      
      <ScheduleRow1 style={{color:"blue"}} hari={"DAY"} pagi={"MORNING"} petang={"AFTERNOON"}/>
      
      <ScheduleRow goToCourses={goToCourses} day={"Monday"} morning={"Business"} afternoon={"Finance"}/>
      <ScheduleRow goToCourses={goToCourses} day={"Tuesday"} morning={"Strategic"} afternoon={"Multimedia"}/>
      <ScheduleRow goToCourses={goToCourses} day={"Wednesday"} morning={"C++ Program"} afternoon={"Web Application"}/>
      <ScheduleRow goToCourses={goToCourses} day={"Thursday"} morning={"V Reality"} afternoon={"Artificial Int."}/>
      <ScheduleRow goToCourses={goToCourses} day={"Friday"} morning={"Calculus"} afternoon={"Marketing"}/>
      
    </View>
  );
};

const ScheduleRow = ({ day, morning, afternoon, goToCourses }) => {
  return (
    <View style={{ flex: 1,backgroundColor:"honeydew", flexDirection: "row", margin: 10 }}>
      <View style={{ flex: 1 }}>
        <Text style={{color:"blue"}}>{day}</Text>
      </View>
      <TouchableOpacity onPress={goToCourses} style={{ flex: 1 }}>
        <Text>{morning}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToCourses} style={{ flex: 1 }}>
        <Text>{afternoon}</Text>
      </TouchableOpacity>
    </View>
  );
};

const ScheduleRow1 = ({ hari, pagi, petang, goToCourses }) => {
  return (
    <View style={{ flex: 1,backgroundColor:"honeydew", flexDirection: "row", margin: 10 }}>
      <View style={{ flex: 1 }}>
        <Text style={{fontWeight:"bold",color:"didarkslategrey"}}> {hari}</Text>
      </View>
      <TouchableOpacity onPress={goToCourses} style={{ flex: 1 }}>
        <Text style={{fontWeight:"bold"}}>{pagi}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToCourses} style={{ flex: 1 }}>
        <Text style={{fontWeight:"bold"}}>{petang}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Schedule;


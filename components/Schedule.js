import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Schedule = ({ goToCourses }) => {
  return (
    <View style={{ flex: 2, backgroundColor:"honeydew",margin: 10 }}>
      
      <ScheduleRow1 style={{color:"blue"}} hari={"DAY"} pagi={"MORNING"} petang={"AFTERNOON"}/>
      
      <ScheduleRow goToCourses={goToCourses} day={"Monday"} morning={"Physics"} afternoon={"English"}/>
      <ScheduleRow goToCourses={goToCourses} day={"Tuesday"} morning={"Mathematics"} afternoon={"Biology"}/>
      <ScheduleRow goToCourses={goToCourses} day={"Wednesday"} morning={"History"} afternoon={"Geography"}/>
      <ScheduleRow goToCourses={goToCourses} day={"Thursday"} morning={"Chemistry"} afternoon={"Science"}/>
      <ScheduleRow goToCourses={goToCourses} day={"Friday"} morning={"Visual Art"} afternoon={"Electronic"}/>
      
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


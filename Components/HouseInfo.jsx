import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import coloredIcon from "../Utils/coloredIcon";
import { useRoute } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const houseInfo = [
  // "House",
  // "Apartment",
  "Bed",
  "Living",
  "Bath",
  "Pool",
  "Garden",
  "Dining",
  "Kitchen",
];
const HouseInfo = ({ info, setInfo }) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.item}>
        {coloredIcon("Bed", 50)}
        <TextInput
          placeholder="0"
          style={styles.input}
          keyboardType="number-pad"
          onChangeText={(text) => {
            let a = info.map((i) => {
              return i.type === "Bed" ? { ...i, number: +text } : i;
            });
            setInfo(a);
          }}
        />
      </View>
      <View style={styles.item}>
        {coloredIcon("Bath", 50)}
        <TextInput
          placeholder="0"
          style={styles.input}
          keyboardType="number-pad"
          onChangeText={(text) => {
            let a = info.map((i) => {
              return i.type === "Bath" ? { ...i, number: +text } : i;
            });
            setInfo(a);
          }}
        />
      </View>
      <View style={styles.item}>
        {coloredIcon("Living", 50)}
        <TextInput
          placeholder="0"
          style={styles.input}
          keyboardType="number-pad"
          onChangeText={(text) => {
            let a = info.map((i) => {
              return i.type === "Living" ? { ...i, number: +text } : i;
            });
            setInfo(a);
          }}
        />
      </View>
      <View style={styles.item}>
        {coloredIcon("Dining", 50)}
        <TextInput
          placeholder="0"
          style={styles.input}
          keyboardType="number-pad"
          onChangeText={(text) => {
            let a = info.map((i) => {
              return i.type === "Dining" ? { ...i, number: +text } : i;
            });
            setInfo(a);
          }}
        />
      </View>
      <View style={styles.item}>
        {coloredIcon("Kitchen", 50)}
        <TextInput
          placeholder="0"
          style={styles.input}
          keyboardType="number-pad"
          onChangeText={(text) => {
            let a = info.map((i) => {
              return i.type === "Kitchen" ? { ...i, number: +text } : i;
            });
            setInfo(a);
          }}
        />
      </View>
      <View style={styles.item}>
        {coloredIcon("Pool", 50)}
        <TextInput
          placeholder="0"
          style={styles.input}
          keyboardType="number-pad"
          onChangeText={(text) => {
            let a = info.map((i) => {
              return i.type === "Pool" ? { ...i, number: +text } : i;
            });
            setInfo(a);
          }}
        />
      </View>
      <View style={styles.item}>
        {coloredIcon("Garden", 50)}
        <TextInput
          placeholder="0"
          style={styles.input}
          keyboardType="number-pad"
          onChangeText={(text) => {
            let a = info.map((i) => {
              return i.type === "Garden" ? { ...i, number: +text } : i;
            });
            setInfo(a);
          }}
        />
      </View>
    </ScrollView>
  );
};

export default HouseInfo;

const styles = StyleSheet.create({
  item: {
    height: height * 0.2,
    width: width * 0.3,
    borderWidth: 1,
    borderColor: "#f4f4f4",
    borderRadius: 15,
    margin: 5,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    borderBottomColor: "#0d6efd",
    borderBottomWidth: 1,
    width: "80%",
    height: 40,
    fontSize: 18,
    textAlign: "center",
  },
});

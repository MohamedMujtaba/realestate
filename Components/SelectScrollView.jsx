import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const SelectScrollView = ({
  title = "Title",
  data = [],
  setSelect,
  select = "Any",
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={
          {
            // justifyContent: "space-evenly",
          }
        }
      >
        <>
          <Text style={[styles.item, select === "Any" && styles.itemSelected]}>
            Any
          </Text>
          {data.map((item, index) => (
            <Text
              style={[styles.item, select === item && styles.itemSelected]}
              key={index.toString()}
            >
              {item}
            </Text>
          ))}
        </>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    width: "100%",
  },
  title: {
    marginBottom: 10,
    fontSize: 16,
  },
  item: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginHorizontal: 5,
    borderRadius: 20,
    borderColor: "#343a40",
    borderWidth: 1,
    color: "#343a40",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  itemSelected: {
    backgroundColor: "#343a40",
    color: "#fff",
  },
});
export default SelectScrollView;

import { Picker, PickerIOS } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const Select = ({
  width,
  data = [],
  selectedValue,
  setSelectedValue,
  title = "Label",
}) => {
  return (
    <View style={[styles.input, { width: width }]}>
      <Text style={styles.label}>{title}</Text>
      <Picker
        mode="dropdown"
        prompt={title}
        style={{ width: "100%" }}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label={"اختار قيمه"} value={"Nothing"} />
        {data.map((i) => {
          return <Picker.Item label={i} value={i} key={i} />;
        })}
      </Picker>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  input: {
    // height: "100%",
    // paddingVertical: 12,
    // paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: "#f4f4f4",
    borderWidth: 1,
    fontSize: 18,
    // marginBottom: 20,
    // backgroundColor: "red",
  },
  text: {
    fontSize: 18,
    color: "#898989",
  },
  label: {
    position: "absolute",
    zIndex: 100,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    color: "#c4c4c4",
    transform: [{ translateY: -12 }],
    fontSize: 15,
  },
});

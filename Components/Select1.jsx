import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef } from "react";
import { Ionicons } from "@expo/vector-icons";

const Select1 = ({ width, bottomSheetOptionRef }) => {
  return (
    <>
      <TouchableOpacity
        style={[styles.container, { width: width }]}
        onPress={() => bottomSheetOptionRef.current.expand()}
      >
        <Text>Text</Text>
        <Ionicons name="add-sharp" size={24} color="#343a40" />
      </TouchableOpacity>
    </>
  );
};

export default Select1;

const styles = StyleSheet.create({
  container: {
    borderColor: "#f4f4f4",
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

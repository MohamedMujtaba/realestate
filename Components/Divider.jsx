import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Divider = ({ width = "97%" }) => {
  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
      }}
    >
      <View
        style={{
          width: width,
          height: 1,
          backgroundColor: "rgba(52, 58, 64,0.05)",
          borderRadius: 100,
        }}
      ></View>
    </View>
  );
};

export default Divider;

const styles = StyleSheet.create({});

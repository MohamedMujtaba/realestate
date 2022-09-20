import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Humb = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.openDrawer()}
    >
      <View
        style={{
          width: "50%",
          height: 3,
          backgroundColor: "#000",
          alignSelf: "flex-end",
          borderRadius: 10,
        }}
      />
      <View
        style={{
          width: "100%",
          height: 3,
          backgroundColor: "#000",
          borderRadius: 10,
        }}
      />
      <View
        style={{
          width: "50%",
          height: 3,
          backgroundColor: "#000",
          alignSelf: "flex-start",
          borderRadius: 10,
        }}
      />
    </TouchableOpacity>
  );
};

export default Humb;

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

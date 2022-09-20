import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Add = () => {
  const Navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => Navigation.navigate("AddOffer")}
    >
      <Ionicons name="add-sharp" size={30} color="#fff" />
    </TouchableOpacity>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    backgroundColor: "#0d6efd",
    borderRadius: 25,
    position: "absolute",
    bottom: 20,
    left: Dimensions.get("window").width / 2 - 25,
    alignItems: "center",
    justifyContent: "center",
  },
});

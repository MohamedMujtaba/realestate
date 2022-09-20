import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import Add from "../../Components/Add";

const MyOffersScreen = () => {
  const navigation = useNavigation();
  const [offers, setOffers] = useState([]);
  return (
    <View style={styles.container}>
      <ScrollView>
        {offers.length === 0 ? <View></View> : <Text>MyOffersScreen</Text>}
      </ScrollView>
      <Add />
    </View>
  );
};

export default MyOffersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "95%",
  },
});

import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import uuid from "react-native-uuid";

const InfoLine = ({ setHouseInfo, houseInfo, deleteLine }) => {
  const [info, setInfo] = useState({
    id: uuid.v4(),
    type: "",
    number: 1,
  });
  useEffect(() => {
    // setHouseInfo([...houseInfo, info]);
    setHouseInfo([...houseInfo.filter((i) => i.id !== info.id), info]);
  }, [info]);
  return (
    <View style={styles.container}>
      <View style={[styles.select, { width: "55%" }]}>
        <Picker
          style={{ width: "100%" }}
          selectedValue={info.type}
          onValueChange={(itemValue, itemIndex) =>
            setInfo({ ...info, type: itemValue })
          }
        >
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Java" value="java" />
        </Picker>
      </View>
      <TextInput
        style={styles.input}
        defaultValue="1"
        keyboardType="number-pad"
        onChangeText={(newText) => setInfo({ ...info, number: newText })}
      />
      <TouchableOpacity style={styles.delete} onPress={() => deleteLine()}>
        <MaterialCommunityIcons
          name="delete-outline"
          size={25}
          color="#F44336"
        />
      </TouchableOpacity>
    </View>
  );
};

export default InfoLine;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "90%",
    flexDirection: "row",
    borderColor: "#f4f4f4",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  select: {
    fontSize: 18,
  },
  input: {
    height: "100%",
    width: "25%",
    borderRightColor: "#f4f4f4",
    borderRightWidth: 1,
    borderLeftColor: "#f4f4f4",
    borderLeftWidth: 1,
    padding: 20,
    textAlign: "center",
  },
  delete: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

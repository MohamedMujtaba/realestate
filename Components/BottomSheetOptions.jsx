import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import Select from "./Select";
import { Ionicons } from "@expo/vector-icons";

const BottomSheetOptions = ({ bottomSheetOptionRef }) => {
  const snapPoints = useMemo(() => ["95%"], []);
  // const handleSheetChanges = useCallback((index) => {
  //   console.log("handleSheetChanges", index);
  // }, []);
  return (
    <BottomSheet
      onPressOut={() => bottomSheetOptionRef.current.close()}
      ref={bottomSheetOptionRef}
      index={-1}
      snapPoints={snapPoints}
      // onChange={handleSheetChanges}
      enablePanDownToClose
    >
      <View style={styles.container}>
        {/* <TouchableOpacity
          style={styles.close}
          onPress={() => bottomSheetOptionRef.current.close()}
        >
          <Ionicons name="close" size={30} color="#dc3545" />
        </TouchableOpacity> */}
        <Select width={"50%"} />
      </View>
    </BottomSheet>
  );
};

export default BottomSheetOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    padding: 20,
  },
  close: {
    position: "absolute",
    top: 0,
    right: 20,
  },
});

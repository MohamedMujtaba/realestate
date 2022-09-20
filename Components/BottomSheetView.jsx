import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import Select from "./Select";
import { Ionicons } from "@expo/vector-icons";
import SelectScrollView from "./SelectScrollView";
import Divider from "./Divider";
import { ScrollView } from "react-native-gesture-handler";

const BottomSheetView = ({ bottomSheetRef, setOpen }) => {
  const snapPoints = useMemo(() => ["92%"], []);
  // const handleSheetChanges = useCallback((index) => {
  //   console.log("handleSheetChanges", index);
  // }, []);
  return (
    <BottomSheet
      // backgroundStyle={{ backgroundColor: "#f4f4f4" }}
      onPressOut={() => bottomSheetRef.current.close()}
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      // onChange={handleSheetChanges}
      enablePanDownToClose
      onClose={() => setOpen(false)}
      style={styles.sheet}
    >
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <SelectScrollView data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
        <Divider width="50%" />
        <SelectScrollView data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
        <Divider />
        <SelectScrollView data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
        <Divider width="50%" />
        <SelectScrollView data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
        <Divider />
        <SelectScrollView data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
        <Divider />
        <SelectScrollView data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
        <Divider />
        <SelectScrollView data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
        <Divider />
        <SelectScrollView data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
        <Divider />
        <SelectScrollView data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
        <Divider />
        <SelectScrollView data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
        <Divider />
        <SelectScrollView data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />

        {/* <View style={styles.subContainer}>
          <Select width={"49%"} title="أختار المدينه " />
          <Select width={"49%"} title="أختار نوع اللعرض " />
        </View>
        <View style={styles.subContainer}>
          <Select width={"49%"} title="أختار نوع المنزل " />
          <Select width={"49%"} />
        </View> */}
      </ScrollView>
    </BottomSheet>
  );
};

export default BottomSheetView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // padding: 20,
    // backgroundColor: "red",
    // height: "100%",
    // width: "98%",
    paddingHorizontal: 20,
  },
  sheet: {
    shadowColor: "#000",
    // alignItems: "center",
    // justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    // backgroundColor: "red",
    borderRadius: 30,
  },
  close: {
    position: "absolute",
    top: 0,
    right: 20,
  },
  subContainer: {
    width: "100%",
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

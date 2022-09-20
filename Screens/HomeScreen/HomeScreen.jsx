import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Dimensions,
  TouchableHighlight,
  RefreshControl,
  Text,
} from "react-native";
import axios from "axios";
import BottomSheetView from "../../Components/BottomSheetView";
import OfferItem from "../../Components/OfferItem";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import SelectScrollView from "../../Components/SelectScrollView";
import { useSelector } from "react-redux";
import HomeLoading from "../../Components/HomeLoading";
const { width, height } = Dimensions.get("window");
const HomeScreen = () => {
  const { id } = useSelector((state) => state.user);
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const bottomSheetRef = useRef(null);
  const getData = async () => {
    try {
      setLoading(true);

      setRefreshing(true);
      const res = await axios.get("http://192.168.43.102:5000/offers/?get=all");
      setRefreshing(false);
      setData(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
    // FIXME: 'isFocused 'do I need it??
  }, []);

  return (
    <View style={styles.container}>
      <FilterRow
        bottomSheetRef={bottomSheetRef}
        open={open}
        setOpen={setOpen}
        loading={loading}
      />
      {loading ? (
        <HomeLoading />
      ) : (
        <FlatList
          style={{ width: width }}
          data={data}
          renderItem={({ item }) => <OfferItem item={item} />}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center", width: width }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={getData} />
          }
        />
      )}
      <BottomSheetView
        bottomSheetRef={bottomSheetRef}
        style={styles.bottomSheet}
        setOpen={setOpen}
      />
    </View>
  );
};

export default HomeScreen;

const FilterRow = ({ bottomSheetRef, open, setOpen, loading }) => {
  return (
    <View style={styles.filterContainer}>
      <TouchableHighlight
        disabled={loading}
        style={styles.filterBtn}
        onPress={() => {
          if (!open) {
            setOpen(true);
            bottomSheetRef.current.expand();
          } else {
            setOpen(false);
            bottomSheetRef.current.close();
          }
        }}
      >
        {open ? (
          <Ionicons name="close" size={28} color="#dc3545" />
        ) : (
          <Feather
            name="sliders"
            size={20}
            color="#fff"
            style={{ transform: [{ rotate: "90deg" }] }}
          />
        )}
        {/* <Text style={{ fontSize: 16 }}>Filter</Text> */}
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingHorizontal: 10,
    alignItems: "center",
  },
  filterContainer: {
    width: " 95%",
    // height: height * 0.06,
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 8,
  },
  filterBtn: {
    height: 45,
    width: 45,
    marginRight: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#343a40",
    // paddingHorizontal: 15,
    // paddingVertical: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
  },
  bottomSheet: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 22,
    zIndex: 100,
  },
});

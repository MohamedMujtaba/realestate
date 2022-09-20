import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
  Pressable,
} from "react-native";
import {
  FontAwesome5,
  MaterialIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const icon = (i) => {
  if (i === "house") {
    return <AntDesign name="home" size={23} color="#898989" />;
  }
  if (i === "apartment") {
    return <MaterialIcons name="apartment" size={23} color="#898989" />;
  }
  if (i === "Bed") {
    return <FontAwesome5 name="bed" size={20} color="#898989" />;
  }
  if (i === "Bath") {
    return <FontAwesome name="bathtub" size={20} color="#898989" />;
  }
  if (i === "Pool") {
    return <FontAwesome name="bathtub" size={20} color="#898989" />;
  }
  if (i === "Garden") {
    return <FontAwesome name="bathtub" size={20} color="#898989" />;
  }
  if (i === "Living") {
    return <FontAwesome name="bathtub" size={20} color="#898989" />;
  }
  if (i === "Dining") {
    return <FontAwesome name="bathtub" size={20} color="#898989" />;
  }
};
const { width, height } = Dimensions.get("window");

const OfferItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("offer", { id: item._id })}
    >
      <Text style={styles.price}>
        {item.curr === "SDG" ? "SDG" : "$"} {item.price}
        <Text style={{ color: "#898989" }}>/m</Text>
      </Text>
      <Image style={styles.img} source={require("../assets/Rectangle.png")} />
      <View style={styles.subContainer}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              width: "100%",
              // paddingBottom: 5,
              // textAlign: "left",
            }}
          >
            {/* Primrose Apartment */}
            {item.name}
          </Text>
        </View>
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          {item.houseIs?.type === "Ground" ? (
            <Icon item={{ type: "house" }} />
          ) : (
            <>
              <Text style={{ fontSize: 18, marginRight: 2 }}>
                {item.houseIs?.number}
              </Text>
              <Icon item={{ type: "apartment" }} />
            </>
          )}
          {item.houseInfo?.map((i, index) => {
            if (i.number !== 0) {
              if (
                i.type === "Bed" ||
                i.type === "Bath" ||
                i.type === "Living"
              ) {
                return <Icon item={i} key={index} />;
              }
            }
          })}
        </View>
      </View>
    </Pressable>
  );
};

export default OfferItem;

const Icon = ({ item }) => {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginRight: 20 }}
    >
      <Text style={{ fontSize: 18, marginRight: 5 }}>{item.number}</Text>
      {icon(item.type)}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    resizeMode: "contain",
    width: width * 0.95,
    height: height / 2.5,
    position: "relative",
    paddingBottom: 10,
    borderRadius: 20,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
    marginBottom: 20,
  },
  img: {
    width: "100%",
    height: "70%",
    resizeMode: "cover",
    borderRadius: 20,
  },
  subContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "space-between",
    flex: 1,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 2,
    backgroundColor: "#f4f4f4",
    padding: 10,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
});

import React, { useState, useEffect } from "react";
import {
  Alert,
  Button,
  Dimensions,
  FlatList,
  Image,
  Linking,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons, Feather, SimpleLineIcons } from "@expo/vector-icons";
import coloredIcon from "../../Utils/coloredIcon";
import { sendWhatsApp } from "../../Utils/sendWhatsApp";
import { callNumber } from "../../Utils/callNumber";
import { openMap } from "../../Utils/openMap";
import ImgModal from "../../Components/ImgModal";
import { StatusBar } from "expo-status-bar";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import OfferLoading from "../../Components/OfferLoading";
const imgs = [
  require("../../assets/house1.jpeg"),
  require("../../assets/house2.jpeg"),
  require("../../assets/hose3.jpeg"),
  require("../../assets/hose3.jpeg"),
];

const text = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus officia eligendi veniam reprehenderit temporibus, repellendus expedita laboriosam ipsum voluptatum cupiditate sunt perferendis laborum et ipsam quisquam eaque fugit ratione aspernatur? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus officia eligendi veniam reprehenderit temporibus, repellendus expedita laboriosam ipsum voluptatum cupiditate sunt perferendis laborum et ipsam quisquam eaque fugit ratione aspernatur?`;
const OfferScreen = () => {
  const route = useRoute();
  const { id } = route.params;
  const [offer, setOffer] = useState({});
  const [modalOpen, setIsModalOpen] = useState(false);
  const [getInfo, setGetInfo] = useState(false);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    setLoading(true);
    const res = await axios.get(`http://192.168.43.102:5000/offers/${id}`);
    setOffer(res.data);
    setLoading(false);
  };
  const getOwnerInfo = async () => {
    try {
      await axios.get(
        `http://192.168.43.102:5000/offers/ownerinfo/Mohamed/${id}`
      );
    } catch (err) {
      console.log(err);
    }
  };
  const renderType = (type) => {
    if (type === "Selling") {
      return "بيع";
    } else if (type === "Renting one day") {
      return "لليوم";
    } else if (type === "Renting one week") {
      return "للاسبوع";
    } else if (type === "Renting one month") {
      return "للشهر";
    } else if (type === "Renting one year") {
      return "للسنة";
    }
  };
  useEffect(() => {
    getData();
  }, []);
  // useEffect(() => {
  //   if (offer.requestInfo?.includes("Mohamed")) {
  //     setGetInfo(true);
  //   }

  // }, [offer]);

  return !loading ? (
    <View style={styles.container}>
      <StatusBar translucent={true} />
      <ImgModal
        imgs={imgs}
        modalOpen={modalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <View
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height / 2.5,
        }}
      >
        <FlatList
          style={styles.list}
          data={imgs}
          renderItem={({ item }) => (
            <Pressable onPress={() => setIsModalOpen(true)}>
              <Image style={styles.img} source={item} />
            </Pressable>
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.width95}>
          <Text style={styles.textBB}>{offer.name} </Text>
        </View>
        <View style={styles.location}>
          <Ionicons name="ios-location-sharp" size={20} color="#898989" />
          <Text style={styles.locationText}>
            {offer.city} ,{offer.location}
          </Text>
        </View>
        <View style={styles.width95}>
          <Text style={styles.desc}>{offer.desc}</Text>
        </View>
        <View style={styles.width95}>
          <Text style={styles.textBB}>معلومات عن المنزل</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <>
            <View style={styles.infoItem}>
              <View style={styles.infoItemInner}>
                {coloredIcon(
                  offer.houseIs?.type === "Ground" ? "House" : "Apartment"
                )}
              </View>
              <Text style={{ width: "100%", textAlign: "center" }}>
                {offer.houseIs?.type === "Apartment" && offer.houseIs?.number}
                {offer.houseIs?.type === "Ground" ? "House" : "Apartment"}
              </Text>
            </View>
            {offer.houseInfo?.map((item, index) => {
              if (item.number !== 0) {
                return (
                  <View key={index.toString()} style={styles.infoItem}>
                    <View style={styles.infoItemInner}>
                      {coloredIcon(item.type)}
                    </View>
                    <Text style={{ width: "100%", textAlign: "center" }}>
                      {item?.number} {item.type}
                    </Text>
                  </View>
                );
              }
            })}
          </>
        </ScrollView>
        {/* <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={offer.houseInfo}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.infoItem}>
              <View style={styles.infoItemInner}>{coloredIcon(item.type)}</View>
              <Text style={{ width: "100%", textAlign: "center" }}>
                {item?.number} {item.type}
              </Text>
            </View>
          )}
        /> */}
      </ScrollView>
      <View style={styles.bottomBar}>
        <Contact
          offer={offer}
          isTrue={getInfo}
          setIsTrue={setGetInfo}
          getOwnerInfo={getOwnerInfo}
        />
        <View style={styles.price}>
          <View style={styles.cur}>
            {offer.curr === "USD" ? (
              <Feather name="dollar-sign" size={24} color="#fff" />
            ) : (
              <Text style={{ color: "#fff" }}>SDG</Text>
            )}
          </View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              marginLeft: 5,
              textAlign: "center",
              alignSelf: "center",
              width: "70%",
            }}
          >
            {offer.price} / {`${renderType(offer.type)}`}
          </Text>
        </View>
      </View>
    </View>
  ) : (
    <OfferLoading />
  );
};

export default OfferScreen;

const Contact = ({ offer, isTrue, setIsTrue, getOwnerInfo }) => {
  // TODO: Get user id
  if (offer.requestInfo?.includes("Mohamed") || isTrue) {
    return (
      <View style={{ height: "100%", width: "40%", flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => sendWhatsApp(`${offer.owner.wPhone}`)}
          style={[styles.smallBtn, { backgroundColor: "#20c997" }]}
        >
          <Ionicons name="md-logo-whatsapp" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => callNumber(`${offer.owner.phone}`)}
          style={[styles.smallBtn, { backgroundColor: "#6f42c1" }]}
        >
          <Feather name="phone" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openMap(12.370367, 23.322272)}
          style={[styles.smallBtn, { backgroundColor: "#ffc107" }]}
        >
          <SimpleLineIcons name="location-pin" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }
  if (!offer.requestInfo?.includes("Mohamed")) {
    return (
      <View
        style={{
          height: "100%",
          width: "45%",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#0d6efd",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
          }}
          onPress={() => {
            getOwnerInfo();
            setIsTrue(true);
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            احصل على بيانات المالك
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  list: {
    // width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height / 2.5,
    // borderBottomLeftRadius: 50,
  },
  img: {
    width: Dimensions.get("window").width,
    height: "100%",
    resizeMode: "cover",
    // FIXME:
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  scroll: {
    width: "100%",
    // height: Dimensions.get("window").height,
    paddingTop: 15,
    // paddingHorizontal: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
    zIndex: 999,
    // transform: [{ scaleY: 1.1 }],
    // paddingBottom: 50,
    // backgroundColor: "red",
  },
  width95: {
    width: "95%",
  },
  textBB: {
    fontSize: 20,
    fontWeight: "bold",
  },
  location: {
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "red",
    paddingTop: 5,
  },
  locationText: {
    fontSize: 16,
    paddingLeft: 5,
  },
  desc: {
    fontSize: 16,
    paddingVertical: 5,
  },
  infoItem: {
    width: 80,
    height: 100,
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 10,
    marginBottom: 30,
  },
  infoItemInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomBar: {
    width: "95%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 2,
    // position: "absolute",
    // bottom: 0,
  },
  smallBtn: {
    height: 50,
    width: 50,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
  price: {
    borderColor: "#0d6efd",
    borderWidth: 1,
    borderRadius: 15,
    width: "50%",
    height: 50,
    textAlign: "center",
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
    paddingRight: 20,
    // backgroundColor: "red",
  },
  cur: {
    alignSelf: "flex-end",
    backgroundColor: "#0d6efd",
    height: "100%",
    width: 50,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  close: {
    position: "absolute",
    top: -100,
    right: 20,
  },
});

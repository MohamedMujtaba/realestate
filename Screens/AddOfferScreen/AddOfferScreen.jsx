import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  Alert,
} from "react-native";
import InfoLine from "../../Components/InfoLine";
import Select from "../../Components/Select";
import { Ionicons } from "@expo/vector-icons";
import {
  citiesArr,
  crrOption,
  houseType,
  offerOption,
} from "../../Utils/arrConstans";
import Select1 from "../../Components/Select1";
import BottomSheetOptions from "../../Components/BottomSheetOptions";
import HouseInfo from "../../Components/HouseInfo";
import axios from "axios";
import TextInputComponent from "../../Components/TextInputComponent";
import { useNavigation } from "@react-navigation/native";
const AddOfferScreen = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(null);
  const [curr, setCurr] = useState("SDG");
  const [desc, setDesc] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [isDisable, setIsDisable] = useState(false);
  const [hType, setHType] = useState("");
  const [hNumber, setHNumber] = useState(0);
  const [houseIs, setHouseIs] = useState({});
  const [houseInfo, setHouseInfo] = useState([
    { type: "Bed", number: 0 },
    { type: "Bath", number: 0 },
    { type: "Living", number: 0 },
    { type: "Dining", number: 0 },
    { type: "Kitchen", number: 0 },
    { type: "Pool", number: 0 },
    { type: "Garden", number: 0 },
  ]);
  useEffect(() => {
    setHouseIs({
      type: hType,
      number: hNumber,
    });
  }, [hType, hNumber]);

  const validation = () => {
    if (title === "") {
      Alert.alert("Title is Required Felid");
    } else if (location === "") {
      Alert.alert("Location is Required Felid");
    } else if (price === null) {
      Alert.alert("Price is Required Felid");
    } else if (curr === "" || curr === "Nothing") {
      Alert.alert("Curr is Required Felid");
    } else if (desc === "") {
      Alert.alert("Desc is Required Felid");
    } else if (city === "") {
      Alert.alert("City is Required Felid");
    } else if (type === "" || type === "Nothing") {
      Alert.alert("Type is Required Felid");
    } else if (houseInfo.Bed === "" || houseInfo.Bed === 0) {
      Alert.alert("Bed is Required Felid");
    } else if (houseInfo.Bath === "" || houseInfo.Bath === 0) {
      Alert.alert("Bath is Required Felid");
    } else if (houseInfo.Kitchen === "" || houseInfo.Kitchen === 0) {
      Alert.alert("Kitchen is Required Felid");
    } else if (hType === "" || (hType === "Building" && hNumber == 0)) {
      Alert.alert("House type is Required Felid");
    } else {
      onSubmit();
      // console.warn("hi");
    }
  };

  const onSubmit = async () => {
    try {
      const res = await axios.post("http://192.168.43.102:5000/offers/", {
        owner: { name: "Mohamed", phone: 901459802, wPhone: 901459802 },
        name: title,
        location: location,
        desc: desc,
        price: +price,
        curr: curr,
        city: city,
        type: type,
        imgs: [],
        houseInfo: houseInfo,
        map: "1000202",
        houseIs: houseIs,
      });
      console.log(res);

      // setIsDisable(true)
      // navigation.navigate("MyOffersScreen");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.width95}>
          <TextInputComponent
            label="Add Title For your Offer"
            defaultValue={title}
            onChangeText={(newTitle) => setTitle(newTitle)}
          />
        </View>
        <View style={styles.width95}>
          <TextInputComponent
            label="Add Location"
            defaultValue={location}
            onChangeText={(newLocation) => setLocation(newLocation)}
          />
        </View>
        <View style={styles.width95}>
          <TextInputComponent
            width="60%"
            label="Price"
            keyboardType="numeric"
            defaultValue={price}
            onChangeText={(newPrice) => setPrice(newPrice)}
          />
          <Select
            width={"35%"}
            title={"اختر عمله"}
            data={crrOption}
            selectedValue={curr}
            setSelectedValue={setCurr}
          />
        </View>
        <View style={styles.width95}>
          <TextInput
            style={[
              styles.input,
              {
                height: Dimensions.get("window").height / 3,
              },
            ]}
            placeholder="Add Title For your Offer"
            multiline={true}
            textAlignVertical={"top"}
            defaultValue={desc}
            onChangeText={(newDesc) => setDesc(newDesc)}
          />
        </View>
        <View style={styles.width95}>
          <Select
            width={"49%"}
            title={"اختر مدينه"}
            data={citiesArr}
            selectedValue={city}
            setSelectedValue={setCity}
          />
          <Select
            width={"49%"}
            title={"اختار نوع العرض"}
            data={offerOption}
            selectedValue={type}
            setSelectedValue={setType}
          />
        </View>
        <View style={styles.width95}></View>
        <View style={styles.width95}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>
            House Information
          </Text>
        </View>
        <View style={styles.width95}>
          <Select
            width={"49%"}
            title="نوع المنزل"
            data={houseType}
            selectedValue={hType}
            setSelectedValue={setHType}
          />
          {hType === "Building" && hType !== "" && (
            <Select
              width={"49%"}
              data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
              selectedValue={hNumber}
              setSelectedValue={setHNumber}
            />
          )}
        </View>
        <HouseInfo info={houseInfo} setInfo={setHouseInfo} />
        <Button
          title="Submit"
          onPress={() => validation()}
          disabled={isDisable}
        />
      </ScrollView>
    </View>
  );
};

export default AddOfferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
    paddingBottom: 10,
  },
  list: {
    width: "100%",
  },
  input: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: "#f4f4f4",
    borderWidth: 1,
    fontSize: 18,
    marginBottom: 20,
  },
  width95: {
    width: "95%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 8,
  },
  btn: {
    width: 115,
    height: 50,
    borderColor: "#f4f4f4",
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
});

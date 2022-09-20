import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import OfferScreen from "../Screens/OfferScreen/OfferScreen";
import Humb from "../Components/Humb";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeStack = createNativeStackNavigator();

const HomeNavigation = () => {
  const navigation = useNavigation();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={headerOptions()}
      />
      <HomeStack.Screen
        name="offer"
        component={OfferScreen}
        options={headerOptions(
          true,
          null,
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              opacity: 0.5,
            }}
          >
            <Ionicons
              name="ios-chevron-back-sharp"
              size={24}
              color="black"
              // style={{
              //   transform: [{ translateX: -0.5 }],
              // }}
            />
          </TouchableOpacity>
        )}
      />
    </HomeStack.Navigator>
  );
};

const headerOptions = (trans = false, right = null, left = <Humb />) => {
  return {
    title: "",
    headerBackTitle: false,
    headerBackStyle: {},
    headerTitleAlign: "center",
    headerShadowVisible: false,
    headerLeft: () => <View>{left}</View>,
    headerRight: () => <View>{right}</View>,
    headerTransparent: trans,
  };
};

export default HomeNavigation;

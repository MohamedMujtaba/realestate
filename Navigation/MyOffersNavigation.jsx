import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyOffersScreen from "../Screens/MyOffersScreen/MyOffersScreen";
import OfferScreen from "../Screens/OfferScreen/OfferScreen";
import Humb from "../Components/Humb";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AddOfferScreen from "../Screens/AddOfferScreen/AddOfferScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OfferNotYet from "../Screens/OffersNotYetScreen/OfferNotYet";

const Tab = createMaterialTopTabNavigator();
const MyOffersStack = createNativeStackNavigator();

const MyOffersNavigation = () => {
  const navigation = useNavigation();
  return (
    <MyOffersStack.Navigator>
      <MyOffersStack.Screen
        name="Main"
        component={Main}
        options={headerOptions("My offers")}
      />
      <MyOffersStack.Screen
        name="AddOffer"
        component={AddOfferScreen}
        options={headerOptions(
          "أضف عرض جديد",
          true,
          null,
          <TouchableOpacity
            onPress={() => navigation.navigate("MyOffersScreen")}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f4f4f4",
            }}
          >
            <Ionicons
              name="ios-chevron-back-sharp"
              size={24}
              color="black"
              style={{
                transform: [{ translateX: -0.5 }],
              }}
            />
          </TouchableOpacity>
        )}
      />
    </MyOffersStack.Navigator>
  );
};

const Main = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MyOffersScreen"
        component={MyOffersScreen}
        options={headerOptions("عروضي")}
      />
      <Tab.Screen
        name="OfferNotYet"
        component={OfferNotYet}
        options={{
          title: "عروض تحت التقييم",
        }}
      />
    </Tab.Navigator>
  );
};

const headerOptions = (
  title = "",
  trans = false,
  right = null,
  left = <Humb />
) => {
  return {
    title,
    headerBackTitle: false,
    headerBackStyle: {},
    headerTitleAlign: "center",
    headerShadowVisible: false,
    headerLeft: () => <View>{left}</View>,
    headerRight: () => <View>{right}</View>,
    headerTransparent: trans,
  };
};

export default MyOffersNavigation;

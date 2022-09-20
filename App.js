import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigation from "./Navigation/HomeNavigation";
import MyOffersNavigation from "./Navigation/MyOffersNavigation";
import { I18nManager, Text } from "react-native";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const Drawer = createDrawerNavigator();

I18nManager.allowRTL(false);
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Drawer.Screen name="Main" component={HomeNavigation} />
          <Drawer.Screen name="MyOffers" component={MyOffersNavigation} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

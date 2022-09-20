import { Linking, Platform } from "react-native";

export const openMap = (lat, lng) => {
  var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
  var url = scheme + `${lat},${lng}`;
  Linking.openURL(url);
}
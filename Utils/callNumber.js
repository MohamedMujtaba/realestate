import { Alert, Linking, Platform } from "react-native";

export const callNumber = (phone) => {
  let phoneNumber = phone;
  if (Platform.OS !== "android") {
    phoneNumber = `telprompt:${"0" + phone}`;
  } else {
    phoneNumber = `tel:${"0" + phone}`;
  }
  Linking.canOpenURL(phoneNumber)
    .then((supported) => {
      if (!supported) {
        Alert.alert("Phone number is not available");
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch((err) => console.log(err));
};
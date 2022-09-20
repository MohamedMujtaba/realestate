import { Alert, Linking, Platform } from "react-native";

export const sendWhatsApp = (number) => {
  let msg =
    `الجقول 
  انا 
  زول 
  `;
  let phoneWithCountryCode = '249' + number;

  let mobile =
    Platform.OS == "ios" ? phoneWithCountryCode : "+" + phoneWithCountryCode;
  if (mobile) {
    if (msg) {
      let url = "whatsapp://send?text=" + msg + "&phone=" + mobile;
      Linking.openURL(url)
        .then((data) => { })
        .catch(() => {
          Alert.alert("Make sure WhatsApp installed on your device");
        });
    } else {
      Alert.alert("Please insert message to send");
    }
  } else {
    Alert.alert("Please insert mobile no");
  }
};
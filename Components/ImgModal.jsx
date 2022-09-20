import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  PinchGestureHandler,
  GestureDetector,
  NativeViewGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

const { width, height } = Dimensions.get("window");

const ImgModal = ({ imgs, modalOpen, setIsModalOpen }) => {
  return (
    <Modal
      transparent={true}
      visible={modalOpen}
      onRequestClose={() => {
        setIsModalOpen(false);
      }}
      animationType={"fade"}
    >
      <StatusBar backgroundColor="rgba(0,0,0,0.9)" />
      <View style={styles.modal}>
        <TouchableOpacity
          onPress={() => setIsModalOpen(false)}
          style={styles.close}
        >
          <Ionicons name="close" size={30} color="#dc3545" />
        </TouchableOpacity>
        <FlatList
          // style={styles.list}
          data={imgs}
          renderItem={({ item }) => <ImgCom item={item} />}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </Modal>
  );
};

const ImgCom = ({ item }) => {
  return <Image resizeMode="cover" style={styles.img} source={item} />;
};

export default ImgModal;

const styles = StyleSheet.create({
  modal: {
    width,
    height,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.9)",
  },
  img: {
    width,
    height: height / 2,
  },
  close: {
    zIndex: 999,
    position: "absolute",
    top: 20,
    right: 10,
  },
});

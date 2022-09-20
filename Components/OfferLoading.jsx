import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";
const COLOR = "#c4c4c4";
const WIDTH = Dimensions.get("window").width;
const OfferLoading = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <One />
      <View style={{ width: WIDTH, alignItems: "center", paddingTop: 15 }}>
        <Two />
      </View>
    </View>
  );
};
const One = () => {
  const o = useSharedValue(0.2);
  const r = useAnimatedStyle(() => {
    return {
      opacity: o.value,
    };
  }, []);
  useEffect(() => {
    o.value = withRepeat(withTiming(1, { duration: 1000 }), -1, true);
  }, []);
  return (
    <Animated.View
      style={[
        {
          width: WIDTH,
          height: Dimensions.get("window").height / 2.5,
          backgroundColor: COLOR,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        },
        r,
      ]}
    />
  );
};
const Two = () => {
  const o = useSharedValue(0.2);
  const r = useAnimatedStyle(() => {
    return {
      opacity: o.value,
    };
  }, []);
  useEffect(() => {
    o.value = withRepeat(withTiming(1, { duration: 1000 }), -1, true);
  }, []);
  return (
    <Animated.View
      style={[
        {
          width: "95%",
        },
        r,
      ]}
    >
      <View style={{ width: "80%", height: 25, backgroundColor: COLOR }} />
      <View
        style={{
          width: "90%",
          height: 15,
          backgroundColor: COLOR,
          marginTop: 15,
        }}
      />
      <View
        style={{
          width: "80%",
          height: 15,
          backgroundColor: COLOR,
          marginTop: 10,
        }}
      />
      <View
        style={{
          width: "70%",
          height: 15,
          backgroundColor: COLOR,
          marginTop: 10,
        }}
      />
      <View
        style={{
          width: "20%",
          height: 15,
          backgroundColor: COLOR,
          marginTop: 10,
        }}
      />
      <View
        style={{
          width: "50%",
          height: 15,
          backgroundColor: COLOR,
          marginTop: 10,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: 20,
        }}
      >
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLOR,
            // marginTop: 10,
          }}
        />
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLOR,
            // marginTop: 10,
          }}
        />
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLOR,
            // marginTop: 10,
          }}
        />
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLOR,
            // marginTop: 10,
          }}
        />
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLOR,
            // marginTop: 10,
          }}
        />
      </View>
    </Animated.View>
  );
};

export default OfferLoading;

const styles = StyleSheet.create({});

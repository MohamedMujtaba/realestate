import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
const { width, height } = Dimensions.get("window");

const HomeLoading = () => {
  const progress = useSharedValue(0.2);
  const rStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
    };
  }, []);
  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 1000 }), -1, true);
  }, []);
  return (
    <Animated.View style={styles.container}>
      <Comp />
      <Comp />
      <Comp />
      <Comp />
    </Animated.View>
  );
};

export default HomeLoading;

const Comp = () => {
  const progress = useSharedValue(0.2);
  const rStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
    };
  }, []);
  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 1000 }), -1, true);
  }, []);
  return <Animated.View style={[styles.item, rStyle]} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    backgroundColor: "#f1f1f1",
    resizeMode: "contain",
    width: width * 0.95,
    height: height / 2.5,
    position: "relative",
    paddingBottom: 10,
    borderRadius: 20,
    paddingBottom: 10,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    // elevation: 2,
    marginBottom: 20,
  },
});

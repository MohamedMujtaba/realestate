import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useRef } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useState } from "react";
import { useEffect } from "react";

const { width, height } = Dimensions.get("window");

const TextInputComponent = ({
  width = "100%",
  label,
  keyboardType = "default",
  defaultValue,
  onChangeText,
}) => {
  const [inputHeight, setInputHeight] = useState(0);

  const [anim, setAnim] = useState(false);
  const trans = useSharedValue(inputHeight);
  const font = useSharedValue(18);
  const zindex = useSharedValue(-1);
  const rStyle = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(font.value),
      transform: [{ translateY: withTiming(trans.value) }],
      zIndex: withTiming(zindex.value),
    };
  }, []);

  useEffect(() => {
    // if (!defaultValue === "" || !defaultValue === null) {
    //   trans.value = -inputHeight * 1.15;
    //   font.value = 14;
    // }
    if (anim && (defaultValue !== "" || defaultValue !== null)) {
      trans.value = -30;
      font.value = 14;
      zindex.value = 100;
    } else if (!anim && (defaultValue === "" || defaultValue === null)) {
      trans.value = 0;
      font.value = 18;
      zindex.value = -1;
    }
  }, [anim]);
  const onLayout = (event) => {
    const { x, y, height, width } = event.nativeEvent.layout;
    setInputHeight(height);
  };
  return (
    <Animated.View style={[styles.container, { width }]}>
      <Animated.Text
        style={[styles.label, rStyle]}
        onLayout={onLayout}
        // FIXME: touch
        pointerEvents="none"
      >
        {label}
      </Animated.Text>
      <TextInput
        style={styles.input}
        onFocus={() => {
          !anim && setAnim(true);
        }}
        onBlur={() => setAnim(false)}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </Animated.View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  container: {
    height: height / 12,
    // marginBottom: 5,
    justifyContent: "center",
  },
  input: {
    width: "100%",
    // height: "100%",
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: "#f4f4f4",
    borderWidth: 1,
    fontSize: 18,
  },
  label: {
    position: "absolute",
    zIndex: 100,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    color: "#c4c4c4",
    // zIndex: -1,
  },
});

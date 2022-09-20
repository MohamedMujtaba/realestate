import React from "react";
import { Image } from "react-native";
export default coloredIcon = (i, d = 30) => {
  if (i === "House") {
    return (
      <Image
        source={require("../assets/house.png")}
        style={{ width: d, height: d }}
      />
    );
  }
  if (i === "Apartment") {
    return (
      <Image
        source={require("../assets/building.png")}
        style={{ width: d, height: d }}
      />
    );
  }
  if (i === "Bed") {
    return (
      <Image
        source={require("../assets/bed.png")}
        style={{ width: d, height: d }}
      />
    );
  }
  if (i === "Bath") {
    return (
      <Image
        source={require("../assets/bathtub.png")}
        style={{ width: d, height: d }}
      />
    );
  }
  if (i === "Living") {
    return (
      <Image
        source={require("../assets/living-room.png")}
        style={{ width: d, height: d }}
      />
    );
  }
  if (i === "Pool") {
    return (
      <Image
        source={require("../assets/swimming-pool.png")}
        style={{ width: d, height: d }}
      />
    );
  }
  if (i === "Garden") {
    return (
      <Image
        source={require("../assets/flowers.png")}
        style={{ width: d, height: d }}
      />
    );
  }
  if (i === "Dining") {
    return (
      <Image
        source={require("../assets/dining-table.png")}
        style={{ width: d, height: d }}
      />
    );
  }
  if (i === "Kitchen") {
    return (
      <Image
        source={require("../assets/kitchen.png")}
        style={{ width: d, height: d }}
      />
    );
  }
};

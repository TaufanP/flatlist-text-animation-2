import React, { FC, memo } from "react";
import { ImageHolderProps } from "../../../assets/types";
import { Dimensions, StyleSheet, View, Image } from "react-native";

const { width, height } = Dimensions.get("screen");

const ImageHolder: FC<ImageHolderProps> = ({ uri }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default memo(ImageHolder);

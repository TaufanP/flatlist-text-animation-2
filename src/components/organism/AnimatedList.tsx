import React, { FC, memo } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { AnimatedListProps } from "../../../assets/types";
import { ImageHolder } from "../atom";

const { width, height } = Dimensions.get("screen");

const AnimatedList: FC<AnimatedListProps> = ({ item: { uri } }) => {
  return (
    <View style={styles.container}>
      <ImageHolder uri={uri} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default memo(AnimatedList);

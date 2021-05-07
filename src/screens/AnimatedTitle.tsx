import React, { FC, useRef } from "react";
import { Animated, FlatList, StyleSheet, View } from "react-native";
import data from "../../assets/data/animatedTitle.json";
import { AnimatedListProps, AnimatedTitleData } from "../../assets/types";
import { AnimatedList, Title } from "../components";

const AnimatedTitle: FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const keyExtractor = (item: AnimatedTitleData, index: number) =>
    `${item.author}${index}`;
  const renderItem = ({ item }: AnimatedListProps) => (
    <AnimatedList item={item} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        {...{
          horizontal: true,
          data,
          keyExtractor,
          renderItem,
          pagingEnabled: true,
          bounces: false,
          showsHorizontalScrollIndicator: false,
          onScroll: Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          ),
          scrollEventThrottle: 16,
        }}
      />
      <Title data={data} scrollX={scrollX} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default AnimatedTitle;

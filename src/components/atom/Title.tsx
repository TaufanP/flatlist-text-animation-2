import React, { FC, useMemo, useState } from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import { AnimatedTitleData, TitleProps } from "../../../assets/types";

const { width, height } = Dimensions.get("screen");

interface StyleProps {
  translateY: any;
}

interface MapperProps {
  textWidth: number;
  text: string;
}

const Title: FC<TitleProps> = ({ data, scrollX }) => {
  const [textLengths, setTextLengths] = useState<MapperProps[]>([]);

  const widthMapper = ({ textWidth, text }: MapperProps) => {
    let newLengths = [...textLengths];
    const existIndex = newLengths.findIndex((item) => item.text == text);
    if (existIndex == -1) {
      newLengths.push({ textWidth, text });
    } else {
      newLengths[existIndex].textWidth = textWidth;
    }
    return setTextLengths(newLengths);
  };

  const widthIndex = useMemo(
    () =>
      scrollX.interpolate({
        inputRange: data.map((_, index) => width * index),
        outputRange:
          textLengths.length == data.length
            ? textLengths.map((item) => item.textWidth + 24)
            : data.map(() => 0),
      }),
    [textLengths]
  );

  const translateY = scrollX.interpolate({
    inputRange: [0, width],
    outputRange: [0, -76],
  });

  const s = styles({ translateY });

  return (
    <View style={s.container}>
      <Animated.View
        style={[
          s.mask,
          {
            width: widthIndex,
          },
        ]}
      />
      {data.map(({ title }: AnimatedTitleData) => (
        <Animated.Text
          style={s.text}
          key={title}
          onTextLayout={(e) =>
            widthMapper({
              textWidth: e.nativeEvent.lines[0].width,
              text: title,
            })
          }
        >
          {title}
        </Animated.Text>
      ))}
    </View>
  );
};

const styles = ({ translateY }: StyleProps) =>
  StyleSheet.create({
    mask: {
      backgroundColor: "red",
      height: 76,
      position: "absolute",
    },
    text: {
      fontSize: 32,
      paddingVertical: 16,
      paddingRight: 24,
      paddingLeft: 8,
      color: "#FFF",
      transform: [{ translateY }],
    },
    container: {
      height: 76,
      position: "absolute",
      bottom: 64,
      overflow: "hidden",
    },
  });

export default Title;

import { Animated } from "react-native";

interface AnimatedTitleData {
  uri: string;
  author: string;
  title: string;
}

interface AnimatedListProps {
  item: AnimatedTitleData;
}

interface ImageHolderProps {
  uri: string;
}

interface TitleProps {
  data: AnimatedTitleData[];
  scrollX: Animated.Value;
}

export { AnimatedTitleData, AnimatedListProps, ImageHolderProps, TitleProps };

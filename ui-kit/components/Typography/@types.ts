import { TextProps } from "react-native";

export interface TypographyProps extends TextProps {
  // буду другие в дизайне, нужно будет изменить
  color?: "primary" | "secondary";
  variant?: "body1" | `button`;
}

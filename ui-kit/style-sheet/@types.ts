import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export type StyleRules = ViewStyle | TextStyle | ImageStyle;
export type StyleRuleKey = keyof StyleRules;
export type StyleRuleValue = StyleRules[StyleRuleKey];

export type NamedStyles<T> = {
  [P in keyof T]: StyleRules;
};

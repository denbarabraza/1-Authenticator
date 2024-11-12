import { Dimensions } from "react-native";

export const SCREEN_DESIGN_DIMENSIONS = {
  height: 812,
  width: 375,
};

export const HEIGHT_PROPORTION =
  Dimensions.get("screen").height / SCREEN_DESIGN_DIMENSIONS.height;
export const WIDTH_PROPORTION =
  Dimensions.get("screen").width / SCREEN_DESIGN_DIMENSIONS.width;

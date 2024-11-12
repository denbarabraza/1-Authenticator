import { TextStyle, ViewStyle } from "react-native";
import { create } from "react-native-pixel-perfect";
import { clamp, curry, multiply, padStart } from "lodash";

import { StyleRuleKey, StyleRules, StyleRuleValue } from "./@types";
import {
  HEIGHT_PROPORTION,
  SCREEN_DESIGN_DIMENSIONS,
  WIDTH_PROPORTION,
} from "./constants";

/**
 * match pixel value to closest value of current device
 * width and height come from the figma design of the app
 */
export const px2dp = create(SCREEN_DESIGN_DIMENSIONS);
export const px2dpH = (value: number) => value * HEIGHT_PROPORTION;
export const px2dpW = (value: number) => value * WIDTH_PROPORTION;

const transformStyle = (
  key: keyof ViewStyle | keyof TextStyle,
  value: StyleRuleValue
) => {
  switch (key) {
    // these we don't want to transform
    case "flex":
    case "zIndex":
    case "flexGrow":
    case "flexBasis":
    case "flexShrink": {
      return value;
    }
    default: {
      return typeof value === "number" ? px2dp(value) : value;
    }
  }
};

export const transformRules = <S extends StyleRules>(styleRules: S) => {
  const result: StyleRules = {};
  const styleKeys = Object.keys(styleRules || {}) as StyleRuleKey[];

  return styleKeys.reduce((acc, key) => {
    const value = (styleRules || {})[key];

    return {
      ...acc,
      [key]: transformStyle(key, value),
    };
  }, result);
};

export const applyAlpha = curry((color: string, alpha: number): string => {
  const cAlpha = clamp(alpha, 0, 1);
  if (cAlpha === 1) return color;
  const alpha256 = multiply(255, cAlpha);
  const alphaBase16 = Number(alpha256.toFixed()).toString(16);
  const paddedAlpha = padStart(alphaBase16, 2, "0");
  return `${color}${paddedAlpha}`;
});

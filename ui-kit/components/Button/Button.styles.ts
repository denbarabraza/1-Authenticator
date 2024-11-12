import EStyleSheet from "react-native-extended-stylesheet";

import {
  applyAlpha,
  createDynamicStyles,
  createStaticStyles,
} from "@/ui-kit/style-sheet";

import { ButtonType } from "./@types";

const CONTAINER_HEIGHT = 40;
const TEXT_LINE_HEIGHT = 20;
const PADDING_VERTICAL = (CONTAINER_HEIGHT - TEXT_LINE_HEIGHT) / 2;
const PADDING_HORIZONTAL = 24;
const PRESSED_OPACITY = 0.1;
const DISABLED_TEXT_OPACITY = 0.38;
const DISABLED_CONTAINER_OPACITY = 0.12;

export const styles = createStaticStyles({
  container: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 20,
    borderWidth: 0,
    display: "flex",
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingVertical: PADDING_VERTICAL,
  },
  containerWithIcon: {
    paddingLeft: 16,
  },
  stateLayer: {
    ...EStyleSheet.absoluteFillObject,
    borderRadius: 20,
  },
});

const useFilledButtonStyles = createDynamicStyles(({ palette }) => ({
  container: {
    backgroundColor: palette.primary,
  },
  containerDisabled: {
    backgroundColor: applyAlpha(palette.onSurface, DISABLED_CONTAINER_OPACITY),
  },
  containerWithIcon: {},
  stateLayerPressed: {
    backgroundColor: applyAlpha(palette.onPrimary, PRESSED_OPACITY),
  },
  text: {
    color: palette.onPrimary,
  },
  textDisabled: {
    color: applyAlpha(palette.onSurface, DISABLED_TEXT_OPACITY),
  },
}));

const useOutlinedButtonStyles = createDynamicStyles(({ palette }) => ({
  container: {
    borderColor: palette.outline,
    borderWidth: 1,
    paddingHorizontal: PADDING_HORIZONTAL - 1, // minus border width
    paddingVertical: PADDING_VERTICAL - 1, // minus border width
  },
  containerDisabled: {
    borderColor: applyAlpha(palette.onSurface, DISABLED_CONTAINER_OPACITY),
  },
  containerWithIcon: {},
  stateLayerPressed: {
    backgroundColor: applyAlpha(palette.primary, PRESSED_OPACITY),
  },
  text: {
    color: palette.primary,
  },
  textDisabled: {
    color: applyAlpha(palette.onSurface, DISABLED_TEXT_OPACITY),
  },
}));

const useTextButtonStyles = createDynamicStyles(({ palette }) => ({
  container: {
    paddingHorizontal: 12,
    paddingRight: 12,
  },
  containerDisabled: {},
  containerWithIcon: {
    paddingRight: 16,
  },
  stateLayerPressed: {
    backgroundColor: applyAlpha(palette.primary, PRESSED_OPACITY),
  },
  text: {
    color: palette.primary,
  },
  textDisabled: {
    color: applyAlpha(palette.onSurface, DISABLED_TEXT_OPACITY),
  },
}));

export const useTypeButtonStyles = (type: ButtonType) => {
  const filledButtonStyles = useFilledButtonStyles();
  const outlinedButtonStyles = useOutlinedButtonStyles();
  const textButtonStyles = useTextButtonStyles();

  switch (type) {
    case "outlined":
      return outlinedButtonStyles;
    case "text":
      return textButtonStyles;
    default:
      return filledButtonStyles;
  }
};

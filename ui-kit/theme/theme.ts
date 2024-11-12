import { useColorScheme } from "./color-scheme";
import { ColorScheme } from "./constants";
import { LIGHT_PALETTE } from "./palette";

export const useTheme = () => {
  const colorScheme = useColorScheme();

  if (colorScheme !== ColorScheme.LIGHT) {
    throw new Error("Color scheme not supported");
  }

  return { colorScheme, palette: LIGHT_PALETTE };
};

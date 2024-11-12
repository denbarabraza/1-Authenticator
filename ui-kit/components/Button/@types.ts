import type { ReactNode } from "react";
import { PressableProps } from "react-native";

export type ButtonType = "filled" | "outlined" | "text";
export interface ButtonProps extends Omit<PressableProps, "style"> {
  children: ReactNode;
  disabled?: boolean;
  /**
   * @default 'filled'
   */
  type?: ButtonType;
}

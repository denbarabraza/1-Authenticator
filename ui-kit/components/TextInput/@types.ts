import { ReactElement } from "react";
import { TextInputProps, ViewProps } from "react-native";

export interface TextFieldProps extends Omit<TextInputProps, "style"> {
  allowClear?: boolean;
  icon?: ReactElement;
  inputStyle?: TextInputProps["style"];
  style?: ViewProps["style"];
}

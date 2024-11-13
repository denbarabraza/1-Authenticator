import { cloneElement, FC, PropsWithChildren, useState } from "react";
import { PixelRatio, TextInput as BaseTextInput, View } from "react-native";

import { useStyles } from "../TextInput/TextInput.styles";
import { useStyles as useTypographyStyles } from "../Typography/Typography.styles";
import { type TextFieldProps } from "./@types";

const ICON_SIZE = 18 * PixelRatio.getFontScale();

export const TextInput: FC<PropsWithChildren<TextFieldProps>> = ({
  allowClear,
  icon,
  inputStyle,
  onBlur,
  onFocus,
  style,
  ...rest
}) => {
  const styles = useStyles();
  const typographyStyles = useTypographyStyles();

  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[styles.container, isFocused && styles.containerFocused, style]}
    >
      {icon && (
        <View>
          {cloneElement(icon, { color: styles.input.color, size: ICON_SIZE })}
        </View>
      )}

      <BaseTextInput
        style={[
          typographyStyles.variantBody1,
          styles.input,
          isFocused && styles.inputFocused,
          inputStyle,
        ]}
        placeholderTextColor={styles.placeholder.color}
        onFocus={(event) => {
          setIsFocused(true);
          onFocus?.(event);
        }}
        onBlur={(event) => {
          setIsFocused(false);
          onBlur?.(event);
        }}
        {...rest}
      />
    </View>
  );
};

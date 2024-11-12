import { memo, useCallback } from "react";
import { Pressable, PressableStateCallbackType, View } from "react-native";

import { Typography } from "../Typography";
import { type ButtonProps } from "./@types";
import { styles, useTypeButtonStyles } from "./Button.styles";

const ButtonInner = ({
  children,
  disabled,
  type = "filled",
  ...rest
}: ButtonProps) => {
  const buttonStyles = useTypeButtonStyles(type);

  const renderContent = useCallback(
    ({ pressed }: PressableStateCallbackType) => (
      <>
        <Typography
          variant="button"
          style={[buttonStyles.text, disabled && buttonStyles.textDisabled]}
        >
          {children}
        </Typography>

        <View
          style={[styles.stateLayer, pressed && buttonStyles.stateLayerPressed]}
        />
      </>
    ),
    [buttonStyles, children, disabled]
  );

  return (
    <Pressable
      style={[
        styles.container,
        buttonStyles.container,
        disabled && buttonStyles.containerDisabled,
      ]}
      disabled={disabled}
      {...rest}
    >
      {renderContent}
    </Pressable>
  );
};

export const Button = memo(ButtonInner);

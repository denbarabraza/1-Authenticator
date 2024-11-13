import { Text } from "react-native";

import type { TypographyProps } from "./@types";
import { useStyles } from "./Typography.styles";

export const Typography = ({
  color = "primary",
  style,
  variant = "body1",
  ...rest
}: TypographyProps) => {
  const styles = useStyles();
  return (
    <Text
      style={[
        variant === "body1" && styles.variantBody1,
        variant === "button" && styles.variantButton,
        color === "primary" && styles.primaryText,
        color === "secondary" && styles.secondaryText,
        style,
      ]}
      {...rest}
    />
  );
};

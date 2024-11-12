import { Text } from "react-native";

import { createDynamicStyles } from "@/ui-kit/style-sheet";

import type { TypographyProps } from "./@types";

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

const useStyles = createDynamicStyles((theme) => ({
  primaryText: {
    color: theme.palette.onSurface,
  },
  secondaryText: {
    color: theme.palette.onSurfaceVariant,
  },
  variantBody1: {
    fontSize: 16,
    lineHeight: 24,
  },
  variantButton: {
    fontSize: 14,
    lineHeight: 20,
  },
}));

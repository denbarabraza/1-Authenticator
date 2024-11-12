import { FC, PropsWithChildren } from "react";
import { View } from "react-native";
import { Edge } from "react-native-safe-area-context";

import { useSafeAreaPaddings } from "./hooks";
import { useStyles } from "./ScreenView.styles";

interface ScreenLayoutProps {
  edges?: Edge[];
}
export const ScreenView: FC<PropsWithChildren<ScreenLayoutProps>> = ({
  children,
  edges,
}) => {
  const paddings = useSafeAreaPaddings(edges);
  const styles = useStyles();

  return <View style={[styles.container, paddings]}>{children}</View>;
};

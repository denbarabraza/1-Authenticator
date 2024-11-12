import { useMemo } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { memoize } from "lodash";

import { Palette, useTheme } from "../theme";
import { NamedStyles } from "./@types";
import { transformRules } from "./utils";

export const createStaticStyles = <S extends NamedStyles<S>>(styles: S): S => {
  const result = {} as S;
  const styleKeys = Object.keys(styles) as (keyof typeof styles)[];

  return EStyleSheet.create(
    styleKeys.reduce((acc, key) => {
      const rules = styles[key];

      return {
        ...acc,
        [key]: transformRules(rules),
      };
    }, result)
  ) as S;
};

interface GetStylesProps {
  palette: Palette;
}
export const createDynamicStyles = <S extends NamedStyles<S>>(
  getStyles: (props: GetStylesProps) => S
) => {
  const memoizedGetStyles = memoize<(props: GetStylesProps) => S>((props) =>
    createStaticStyles(getStyles(props))
  );

  return (): NamedStyles<S> => {
    const { palette } = useTheme();
    const props: GetStylesProps = useMemo(() => ({ palette }), [palette]);
    return memoizedGetStyles(props);
  };
};

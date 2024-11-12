import React, { FC, PropsWithChildren } from "react";
import {
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  KeyboardAvoidingViewProps as RNKeyboardAvoidingViewProps,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

export interface KeyboardAvoidingViewProps extends RNKeyboardAvoidingViewProps {
  extraPadding?: number;
}

const useBaseKeyboardVerticalOffset = (extraPadding = 0) => {
  const headerHeight = useHeaderHeight();
  if (!headerHeight) return extraPadding;

  return headerHeight + extraPadding;
};

export const KeyboardAvoidingView: FC<
  PropsWithChildren<KeyboardAvoidingViewProps>
> = ({
  extraPadding,
  keyboardVerticalOffset: externalKeyboardVerticalOffset,
  ...props
}) => {
  const keyboardVerticalOffset = useBaseKeyboardVerticalOffset(extraPadding);

  return (
    <RNKeyboardAvoidingView
      keyboardVerticalOffset={
        externalKeyboardVerticalOffset ?? keyboardVerticalOffset
      }
      {...props}
    />
  );
};

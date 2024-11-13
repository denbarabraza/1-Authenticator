import React from "react";
import { View } from "react-native";

import { Typography } from "@/ui-kit/components";

export const Cta = () => {
  return (
    <View>
      <Typography>Set Up Your First Account</Typography>
      <Typography>
        Tap the button below to scan a QR code or enter your account information
        manually.
      </Typography>
    </View>
  );
};

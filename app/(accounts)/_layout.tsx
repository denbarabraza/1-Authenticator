import React from "react";
import { Stack } from "expo-router";

export default function AccountLayout() {
  console.log("AccountLayout");

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="keys" />
      <Stack.Screen name="add-key" />
    </Stack>
  );
}

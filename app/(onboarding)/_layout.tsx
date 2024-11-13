import { Redirect, Stack } from "expo-router";

import { useSubscription } from "@/features/subscription";

export default function OnboardingLayout() {
  const { hasPremiumAccess } = useSubscription();

  if (hasPremiumAccess) return <Redirect href="/(app)" />;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="ob2" />
    </Stack>
  );
}

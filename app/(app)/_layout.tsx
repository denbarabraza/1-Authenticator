import { Redirect, Stack } from "expo-router";

import { useSubscription } from "@/features/subscription";

export default function AppLayout() {
  const { hasPremiumAccess } = useSubscription();
  if (!hasPremiumAccess) return <Redirect href="/(onboarding)" />;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="explore" />
    </Stack>
  );
}

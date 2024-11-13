import { Stack } from "expo-router";

export default function OnboardingLayout() {
  console.log("OnboardingScreen");
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ob1" />
      <Stack.Screen name="ob2" />
    </Stack>
  );
}

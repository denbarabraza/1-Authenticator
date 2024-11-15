import { useEffect } from "react";
import ApphudSdk from "@apphud/react-native-apphud-sdk";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import "react-native-reanimated";

import { SubscriptionProvider, useSubscription } from "@/features/subscription";

import { ThemeProvider } from "@/ui-kit/theme";

import { APPHUD_API_KEY } from "@/constants/env";

SplashScreen.preventAutoHideAsync();
ApphudSdk.start({ apiKey: APPHUD_API_KEY });

const RootLayoutContent = () => {
  const { initialLoading: initialSubscriptionLoading } = useSubscription();
  const [fontsLoaded] = useFonts({
    // TODO: добавить другие шрифты
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const loaded = fontsLoaded && !initialSubscriptionLoading;

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return (
    <Stack>
      <Stack.Screen name="(app)" />
      <Stack.Screen name="(onboarding)" />
    </Stack>
  );
};

const RootLayout = () => {
  return (
    <SubscriptionProvider>
      <ThemeProvider>
        <RootLayoutContent />
      </ThemeProvider>
    </SubscriptionProvider>
  );
};

export default RootLayout;

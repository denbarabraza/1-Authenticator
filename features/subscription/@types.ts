import type ApphudSdk from "@apphud/react-native-apphud-sdk";
import { ApphudSubscription } from "@apphud/react-native-apphud-sdk/src/ApphudSdkType";

export interface SubscriptionContextProps {
  hasPremiumAccess: boolean;
  initialLoading: boolean;
  purchase: typeof ApphudSdk.purchase;
  subscriptions: ApphudSubscription[];
}

import {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import ApphudSdk from "@apphud/react-native-apphud-sdk";
import { ApphudSubscription } from "@apphud/react-native-apphud-sdk/src/ApphudSdkType";

import { SubscriptionContext } from "./Context";

export const SubscriptionProvider: FC<PropsWithChildren> = ({ children }) => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [hasPremiumAccess, setHasPremiumAccess] = useState(false);
  const [subscriptions, setSubscriptions] = useState<ApphudSubscription[]>([]);

  const purchase: typeof ApphudSdk.purchase = useCallback(async (props) => {
    const result = await ApphudSdk.purchase(props);
    if (result.success) {
      setHasPremiumAccess(true);
    }
    return result;
  }, []);

  useEffect(() => {
    const checkSubscription = async () => {
      const [subscriptions, hasPremiumAccess] = await Promise.all([
        ApphudSdk.subscriptions(),
        ApphudSdk.hasPremiumAccess(),
      ]);

      setSubscriptions(subscriptions);
      setHasPremiumAccess(hasPremiumAccess);
      setInitialLoading(false);
    };
    checkSubscription();
  }, []);

  const value = useMemo(
    () => ({
      hasPremiumAccess,
      initialLoading,
      purchase,
      subscriptions,
    }),
    [hasPremiumAccess, initialLoading, purchase, subscriptions]
  );
  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
};

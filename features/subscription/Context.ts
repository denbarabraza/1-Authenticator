import { createContext, useContext } from "react";
import { noop } from "lodash";

import { SubscriptionContextProps } from "./@types";

export const SubscriptionContext = createContext<SubscriptionContextProps>({
  hasPremiumAccess: false,
  initialLoading: true,
  purchase: noop as SubscriptionContextProps["purchase"],
  subscriptions: [],
});

export const useSubscription = () => useContext(SubscriptionContext);

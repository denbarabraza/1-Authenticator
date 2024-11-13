import { Cta } from "@/features/applications/components/Cta/Cta";
import { useAccounts } from "@/features/applications/hooks";

import { ScreenView } from "@/components/ScreenView/ScreenView";

import { Typography } from "@/ui-kit/components";

export default function KeysPage() {
  const { accountParamsList } = useAccounts();

  if (accountParamsList.length === 0) {
    return (
      <ScreenView>
        <Cta />
      </ScreenView>
    );
  }

  return (
    <ScreenView>
      <Typography>KeysPage</Typography>
    </ScreenView>
  );
}

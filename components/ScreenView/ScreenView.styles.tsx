import { createDynamicStyles } from "@/ui-kit/style-sheet";

export const useStyles = createDynamicStyles(({ palette }) => ({
  container: {
    backgroundColor: palette.background,
    flex: 1,
  },
}));

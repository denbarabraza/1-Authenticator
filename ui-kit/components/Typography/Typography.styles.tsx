import { createDynamicStyles } from "@/ui-kit/style-sheet";

export const useStyles = createDynamicStyles((theme) => ({
  primaryText: {
    color: theme.palette.onSurface,
  },
  secondaryText: {
    color: theme.palette.onSurfaceVariant,
  },
  variantBody1: {
    fontSize: 16,
    lineHeight: 24,
  },
  variantButton: {
    fontSize: 14,
    lineHeight: 20,
  },
}));

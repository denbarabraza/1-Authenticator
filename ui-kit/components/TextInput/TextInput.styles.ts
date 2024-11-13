import { createDynamicStyles } from "@/ui-kit/style-sheet";

const CONTAINER_HEIGHT = 56;
const TEXT_LINE_HEIGHT = 14 ?? 0;
const PADDING_VERTICAL = (CONTAINER_HEIGHT - TEXT_LINE_HEIGHT) / 2;
const PADDING_HORIZONTAL = 16;

export const useStyles = createDynamicStyles(({ palette }) => ({
  container: {
    backgroundColor: "transparent",
    borderColor: palette.outline,
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: PADDING_HORIZONTAL - 1,
    paddingVertical: 0,
  },
  containerFocused: {
    borderColor: palette.primary,
    borderWidth: 2,
    paddingHorizontal: PADDING_HORIZONTAL - 2,
  },
  input: {
    alignItems: "center",
    backgroundColor: "transparent",
    color: palette.onSurface ?? "red",
    lineHeight: TEXT_LINE_HEIGHT,
    paddingVertical: PADDING_VERTICAL - 1,
  },
  inputFocused: {
    paddingVertical: PADDING_VERTICAL - 2,
  },
  placeholder: {
    color: palette.onSurfaceVariant,
  },
}));

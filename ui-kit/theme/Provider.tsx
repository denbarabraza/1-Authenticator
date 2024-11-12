import {
  DefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from "@react-navigation/native";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NavigationThemeProvider value={DefaultTheme}>
      {children}
    </NavigationThemeProvider>
  );
};

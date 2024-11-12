import { View } from "react-native";
import { Link, Stack } from "expo-router";

import { Typography } from "@/ui-kit/components";
import { createStaticStyles } from "@/ui-kit/style-sheet";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Typography>This screen doesn't exist.</Typography>
        <Link href="/" style={styles.link}>
          <Typography>Go to home screen!</Typography>
        </Link>
      </View>
    </>
  );
}

const styles = createStaticStyles({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});

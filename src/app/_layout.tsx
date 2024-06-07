import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Home",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}

import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack screenOptions={{ headerShown: true, statusBarColor: "black" }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* presentation: "modal" tidak berfungsi pada android */}
      <Stack.Screen name="cart" options={{ presentation: "modal" }} />
    </Stack>
  );
}

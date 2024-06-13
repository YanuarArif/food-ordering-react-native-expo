import CartProvider from "@/providers/CartProvider";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <CartProvider>
      <Stack screenOptions={{ headerShown: true, statusBarColor: "black" }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* presentation: "modal" tidak berfungsi pada android */}
        <Stack.Screen
          name="cart"
          options={{ presentation: "modal", title: "Keranjang Belanja" }}
        />
      </Stack>
    </CartProvider>
  );
}

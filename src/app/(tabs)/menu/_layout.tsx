import { Colors } from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function MenuLayout() {
  return (
    <Stack
      screenOptions={{
        title: "Menu",
        headerTitleAlign: "center",
        headerRight: () => (
          <Link href="/cart" asChild>
            <Pressable>
              <FontAwesome
                name="shopping-cart"
                size={20}
                color={Colors.light.tint}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          </Link>
        ),
      }}
    />
  );
}

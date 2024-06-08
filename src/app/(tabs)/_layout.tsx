import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      {/* untuk menghilangkan index redirect menjadi tab */}
      <Tabs.Screen name="index" options={{ href: null }} />

      <Tabs.Screen
        name="menu"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="akun"
        options={{
          title: "Akun",
          headerTitleAlign: "center",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-box" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

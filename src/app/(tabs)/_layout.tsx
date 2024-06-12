import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarLabel: "Menu",
          headerTitleAlign: "center",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={20} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="akun"
        options={{
          title: "Akun",
          tabBarLabel: "Akun",
          headerTitleAlign: "center",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="account-box" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

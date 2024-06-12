import products from "@assets/data/products";
import ProductListItem from "@components/ProductListItem";
import { Redirect } from "expo-router";
import { FlatList, View } from "react-native";

export default function TabIndex() {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}

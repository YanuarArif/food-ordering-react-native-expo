import { View } from "react-native";
import product from "../../assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";

export default function HomeScreen({}) {
  return (
    <View>
      <ProductListItem product={product[0]} />
      <ProductListItem product={product[1]} />
    </View>
  );
}

import { View, Text, FlatList } from "react-native";
import { useCart } from "@/providers/CartProvider";
import CartListItem from "@components/CartListItem";

const CartScreen = () => {
  const { items } = useCart();

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ gap: 10, padding: 10 }}
      />
      <Text>Cart item length: {items.length}</Text>
    </View>
  );
};

export default CartScreen;

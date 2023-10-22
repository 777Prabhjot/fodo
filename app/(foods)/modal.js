import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCartStore } from "../../store";
import CartItem from "../../components/CartItem";
import { router } from "expo-router";

export default function modal() {
  const cartItems = useCartStore((state) => state.cartItems);

  let totalPrice = 0;

  cartItems.forEach((item) => {
    totalPrice = totalPrice + item?.price * item?.quantity;
  });

  return (
    <SafeAreaView>
      <View style={styles.parentConatiner}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.map((item) => {
            return (
              <View key={item?.id} style={{ marginTop: 20 }}>
                <CartItem
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  kcal={item.kcal}
                  quan={item.quantity}
                  image={item.image}
                />
              </View>
            );
          })}
          <View style={{ marginTop: 60 }}></View>
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.orderButton}
          onPress={() => router.push("/order")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontFamily: "Neuton-Bold",
            }}
          >
            Order : ₹{totalPrice}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parentConatiner: {
    backgroundColor: "white",
    padding: "5%",
    height: "100%",
    paddingTop: 0,
  },
  orderButton: {
    position: "absolute",
    bottom: 15,
    left: "10%",
    backgroundColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 18,
    width: "90%",
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
  },
});

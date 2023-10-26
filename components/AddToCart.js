import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import { router } from "expo-router";
import { useCartStore } from "../store";

const AddToCart = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  let totalPrice = 0;

  cartItems.forEach((item) => {
    totalPrice = totalPrice + item?.price;
  });
  return (
    <>
      <View style={styles.container}>
        <Text
          style={{ color: "white", fontFamily: "Neuton-Regular", fontSize: 18 }}
        >
          ₹ {totalPrice}.00
        </Text>
        <View style={{ position: "relative" }}>
          {cartItems?.length ? (
            <View style={styles.notify}>
              <Text style={{ color: "white", fontWeight: "600" }}>
                {cartItems?.length}
              </Text>
            </View>
          ) : (
            <></>
          )}
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() => router.push("/modal")}
        >
          <Icon name="shopping-bag" size={16} />
          <Text
            style={{
              marginStart: 7,
              fontFamily: "Neuton-Bold",
              fontSize: 16,
            }}
          >
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 10,
    left: "5%",
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 30,
    backgroundColor: "black",
    width: "90%",
  },
  button: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 25,
  },
  notify: {
    backgroundColor: "#4FAE5A",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    marginRight: 15,
    borderRadius: 20,
    position: "absolute",
    left: 10,
    top: -15,
  },
});

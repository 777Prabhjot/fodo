import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useCartStore } from "../store";

const FoodItem = ({ id, image, title, price, kal, quantity, myorder }) => {
  const items = useCartStore((state) => state.cartItems);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeCartItem = useCartStore((state) => state.removeCartItem);

  let alreadyInCart = false;

  items.forEach((item) => {
    if (item?.id === id) {
      alreadyInCart = true;
    }
  });

  const handleClick = () => {
    if (!myorder) {
      if (!alreadyInCart) {
        addToCart({
          id,
          image,
          title,
          price,
          kcal: kal,
          quantity,
        });
      } else {
        removeCartItem(id);
      }
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={handleClick}
    >
      {alreadyInCart && (
        <View style={styles.notify}>
          <Text style={{ color: "white", fontWeight: "600" }}>1</Text>
        </View>
      )}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image} />
        </View>
        <View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Neuton-Regular",
              }}
            >
              {title}
            </Text>
            {myorder && (
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Neuton-Regular",
                  marginVertical: 5,
                }}
              >
                Quantity: {quantity}
              </Text>
            )}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.price}>₹ {price * quantity}</Text>
            <Text style={{ fontWeight: "500", fontFamily: "Neuton-Bold" }}>
              - {kal}.00 kcal
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    borderRadius: 13,
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  imageContainer: {
    backgroundColor: "#F7F7F7",
    width: "30%",
    padding: "5%",
    borderRadius: 13,
    marginRight: 25,
  },
  image: {
    width: 70,
    height: 70,
    objectFit: "scale-down",
  },
  price: {
    fontWeight: "400",
    fontFamily: "Neuton-Regular",
    fontSize: 16,
    backgroundColor: "#4FAE5A",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    color: "white",
    marginTop: 6,
    marginRight: 6,
  },

  notify: {
    backgroundColor: "#4FAE5A",
    alignItems: "center",
    justifyContent: "center",
    width: 27,
    height: 27,
    position: "absolute",
    right: 10,
    top: 15,
    borderRadius: 20,
  },
});

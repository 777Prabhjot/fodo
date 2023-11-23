import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useCartStore } from "../store";

const CartItem = ({ id, image, title, price, kcal, quan }) => {
  const updateCartItem = useCartStore((state) => state.updateItem);

  const hanldeUpdate = (updatedQuantity) => {
    updateCartItem({
      id,
      image,
      price,
      title,
      kcal,
      quantity: updatedQuantity,
    });
  };

  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
      </View>

      <View
        style={{
          ...styles.container,
          alignItems: "baseline",
          paddingVertical: 20,
        }}
      >
        <View>
          <Text style={{ fontFamily: "Neuton-Bold", fontSize: 19 }}>
            {title}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 2,
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={styles.price}>₹ {price}</Text>
              <Text style={{ fontFamily: "Neuton-Regular", fontSize: 15 }}>
                - {kcal}.00 kcal
              </Text>
            </View>
            <View style={styles.quantity}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  if (quan > 1) {
                    hanldeUpdate(quan - 1);
                  }
                }}
                style={styles.qbutton}
              >
                <Text
                  style={{
                    fontWeight: "600",
                  }}
                >
                  -
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: "white",
                  fontFamily: "Neuton-Regular",
                  fontSize: 16,
                }}
              >
                {quan}
              </Text>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.qbutton}
                onPress={() => hanldeUpdate(quan + 1)}
              >
                <Text
                  style={{
                    fontWeight: "600",
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7",
    paddingVertical: 35,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginTop: 10,
    display: "flex",
    alignItems: "center",
  },

  image: {
    width: 100,
    height: 100,
    objectFit: "scale-down",
  },

  price: {
    fontFamily: "Neuton-Regular",
    fontSize: 17,
    backgroundColor: "#4FAE5A",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    color: "white",
    marginTop: 6,
    marginRight: 6,
  },

  quantity: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 8,
    width: "30%",
    borderRadius: 20,
    backgroundColor: "black",
  },
  qbutton: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 20,
    width: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import React from "react";

const AddToCart = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>₹ 0.00</Text>
      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <Icon name="shopping-bag" size={16} />
        <Text style={{ marginStart: 7, fontWeight: "600" }}>Add to cart</Text>
      </TouchableOpacity>
    </View>
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
    left: "15%",
    paddingVertical: 7,
    paddingHorizontal: 8,
    borderRadius: 25,
    backgroundColor: "black",
    width: "70%",
  },
  button: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 25,
  },
});

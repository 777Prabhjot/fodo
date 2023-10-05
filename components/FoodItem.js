import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const FoodItem = ({ image, title, price, kal }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container}>
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
          <Text style={{ fontWeight: "700", fontSize: 18 }}>{title}</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.price}>₹ {price}</Text>
            <Text style={{ fontWeight: "500" }}>- {kal}.00 kcal</Text>
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
    width: 60,
    height: 60,
  },
  price: {
    fontWeight: "400",
    fontSize: 16,
    backgroundColor: "#4FAE5A",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    color: "white",
    marginTop: 6,
    marginRight: 6,
  },
});

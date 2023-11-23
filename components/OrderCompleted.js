import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const OrderCompleted = ({ handleState }) => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginTop: 80 }}>
        <Image style={styles.image} source={require("../assets/obg.png")} />
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={{ fontSize: 23, fontFamily: "Neuton-Bold" }}>
          Order Completed
        </Text>

        <TouchableOpacity style={styles.button} activeOpacity={0.4}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Neuton-Regular",
              color: "white",
            }}
            onPress={() => {
              handleState(false);
              router.replace("/profile");
            }}
          >
            My orders
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => {
            handleState(false);
            router.replace("/");
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontFamily: "Neuton-Italic",
            }}
          >
            Go back to home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderCompleted;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    height: "100%",
  },
  image: {
    height: 300,
    width: 300,
  },
  button: {
    backgroundColor: "#036F48",
    alignItems: "center",
    padding: 16,
    width: "90%",
    marginTop: 110,
    borderRadius: 30,
  },
});

import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import FoodItem from "../../components/FoodItem";
import { useMyOrdersStore } from "../../store";

const myorders = () => {
  const myOrders = useMyOrdersStore((state) => state.myOrders);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontFamily: "Neuton-Regular", fontSize: 25 }}>
            My Orders
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          {myOrders?.map((item) => (
            <View key={item.id}>
              <FoodItem
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                kal={item.kcal}
                quantity={item.quantity}
                myorder={true}
              />
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default myorders;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    height: "100%",
  },
});

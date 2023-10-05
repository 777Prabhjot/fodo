import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import FoodItem from "../components/FoodItem";
import AddToCart from "../components/AddToCart";
const burgerImage = require("../assets/burger.png");
const pizzaImage = require("../assets/pizza.png");

const DATA = [
  {
    id: "bd7acbea",
    title: "Most Popular",
  },
  {
    id: "3ac68afc",
    title: "Under ₹100",
  },
  {
    id: "58694a0f",
    title: "Recently Added",
  },
];

const Item = ({ title }) => (
  <TouchableOpacity
    activeOpacity={0.6}
    style={{
      ...styles.item,
      backgroundColor: title === "Most Popular" && "black",
    }}
  >
    <Text
      style={{ ...styles.title, color: title === "Most Popular" && "white" }}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

const foods = () => {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={DATA}
          horizontal={true}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.container}>
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <View>
                <FoodItem
                  image={burgerImage}
                  title="Burger"
                  price={90}
                  kal={422}
                />
                <FoodItem
                  image={pizzaImage}
                  title="Pizza"
                  price={199}
                  kal={678}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
      <AddToCart />
    </>
  );
};

export default foods;

const styles = StyleSheet.create({
  container: {
    padding: "5%",
    position: "relative",
  },
  item: {
    borderWidth: 1,
    borderColor: "grey",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 30,
    marginHorizontal: 16,
    borderRadius: 20,
  },
  title: {
    fontWeight: "600",
  },
});

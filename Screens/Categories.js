import { Image, StyleSheet, Text, View } from "react-native";
import Category from "../components/Category";
const offersIcon = require("../assets/offer.png");
const chickenIcon = require("../assets/chick.png");
const burgerIcon = require("../assets/burger.png");
const pizzaIcon = require("../assets/pizza.png");
const saladIcon = require("../assets/salad.png");
const coffeeIcon = require("../assets/coffee.png");

const Categories = () => {
  return (
    <View style={styles.container}>
      <Category image={offersIcon} text="Offers" />
      <Category image={chickenIcon} text="Chicken" />
      <Category image={burgerIcon} text="Burger" />
      <Category image={pizzaIcon} text="Pizza" />
      <Category image={coffeeIcon} text="Coffee" />
      <Category image={saladIcon} text="Salad" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Categories;

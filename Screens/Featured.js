import { StyleSheet, Text, View } from "react-native";
import Item from "../components/Item";
const burgerImage = require("../assets/mac.png");
const coffeeImage = require("../assets/coff.png");
const pizzaImage = require("../assets/pizz.png");
const kfcImage = require("../assets/kfc.png");

const Featured = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Featured</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Item
          title="McDonald - Kartasura"
          time="15-20"
          rating={4.8}
          image={burgerImage}
        />
        <Item
          title="Fore Coffee - Paragon"
          time="10-15"
          rating={4.2}
          image={coffeeImage}
        />
        <Item
          title="Domino's - Large Pizza"
          time="30-45"
          rating={4.5}
          image={pizzaImage}
        />
        <Item
          title="KFC - Vegen Chicken"
          time="30-40"
          rating={4.3}
          image={kfcImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    fontFamily: "Neuton-Bold",
    marginBottom: 12,
    marginTop: 20,
  },
});

export default Featured;

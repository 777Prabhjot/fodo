import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FoodItem from "../../components/FoodItem";
import AddToCart from "../../components/AddToCart";
import { useFoodsStore } from "../../store";

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

const Foods = () => {
  const foods = useFoodsStore((state) => state.foods);
  const [activeTab, setActiveTab] = useState("Most Popular");

  const toggleUnder100Filter = (title) => {
    setActiveTab(title);
  };

  const filteredFoods =
    activeTab === "Under ₹100"
      ? foods.filter((item) => item.price < 100)
      : foods;

  return (
    <SafeAreaView style={{ position: "relative" }}>
      <ScrollView
        style={{ height: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          data={DATA}
          horizontal={true}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              onPress={() => toggleUnder100Filter(item.title)}
              isActive={activeTab === item.title}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.container}>
          {filteredFoods.map((item) => (
            <View key={item.id}>
              <FoodItem
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                kal={item.kcal}
                quantity={item.quantity}
              />
            </View>
          ))}
        </View>
        <View style={{ marginTop: 60 }}></View>
      </ScrollView>
      <AddToCart />
    </SafeAreaView>
  );
};

const Item = ({ title, onPress, isActive }) => (
  <TouchableOpacity
    activeOpacity={0.6}
    style={{
      ...styles.item,
      backgroundColor: isActive ? "black" : "white",
    }}
    onPress={onPress}
  >
    <Text
      style={{
        ...styles.title,
        color: isActive ? "white" : "black",
      }}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

export default Foods;

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
    fontFamily: "Neuton-Bold",
  },
});

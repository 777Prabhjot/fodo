import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import { router } from "expo-router";

const AddToCart = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={{ color: "white" }}>₹ 0.00</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() => router.push("/modal")}
        >
          <Icon name="shopping-bag" size={16} />
          <Text style={{ marginStart: 7, fontWeight: "600" }}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </>
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
    left: "5%",
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 30,
    backgroundColor: "black",
    width: "90%",
  },
  button: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "40%",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 25,
  },
});

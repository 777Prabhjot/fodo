import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const Category = ({ image, text }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.4}>
      <View style={styles.category}>
        <Image style={styles.image} source={image} />
      </View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "4%",
    marginTop: 10,
    backgroundColor: "#F7F7F7",
    width: "30%",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
  },
  category: {
    backgroundColor: "white",
    paddingVertical: "10%",
    paddingHorizontal: "15%",
    borderRadius: 70,
  },
  image: {
    width: 33,
    height: 33,
  },
  text: {
    marginTop: 5,
    fontFamily: "Neuton-Bold",
  },
});

export default Category;

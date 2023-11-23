import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const Item = ({ title, rating, image, time }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5}>
      <Image style={styles.image} source={image} />
      <View style={styles.rating}>
        <Image
          style={{ width: 13, height: 13 }}
          source={require("../assets/star.png")}
        />
        <Text style={{ fontFamily: "Neuton-Regular", marginStart: 4 }}>
          {rating}
        </Text>
      </View>
      <Text style={styles.text}>{title}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 3,
          marginTop: 3,
        }}
      >
        <Text style={{ fontFamily: "Neuton-Regular" }}>1.2km</Text>
        <Text style={{ fontFamily: "Neuton-Regular" }}>{time} minutes</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7",
    marginTop: 10,
    width: "48%",
    padding: "2%",
    borderRadius: 20,
    position: "relative",
  },
  image: {
    width: "100%",
    height: 130,
    borderRadius: 20,
  },
  rating: {
    backgroundColor: "white",
    position: "absolute",
    top: 11,
    padding: 3,
    paddingHorizontal: 7,
    right: 13,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
  },
  text: {
    fontFamily: "Neuton-Bold",
    marginTop: 5,
  },
});

export default Item;

import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
const Banner = () => {
  return (
    <View>
      <View style={styles.bannerContainer}>
        <View style={{ width: "60%", padding: "5%" }}>
          <Text style={styles.text}>Claim your daily free delivery now!</Text>
          <Button
            mode="contained"
            style={{
              width: 115,
              backgroundColor: "#131613",
            }}
          >
            <Text style={{ fontFamily: "Neuton-Bold", fontSize: 15 }}>
              Order now
            </Text>
          </Button>
        </View>
        <Image source={require("../assets/thumb.png")} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 18,
    width: "90%",
    fontWeight: "500",
    fontFamily: "Neuton-Bold",
    marginBottom: 15,
    lineHeight: 22,
  },
  bannerContainer: {
    backgroundColor: "#4FAE5A",
    borderRadius: 17,
    display: "flex",
    flexDirection: "row",
  },

  image: {
    width: 110,
    height: 130,
  },
});

export default Banner;

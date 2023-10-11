import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
// import {  } from "react-native-paper";
import { useFonts } from "expo-font";
const logo = require("../assets/logo1.png");

const login = () => {
  const [fontsLoaded] = useFonts({
    "Neuton-Italic": require("../assets/fonts/Neuton-Italic.ttf"),
    "Neuton-Bold": require("../assets/fonts/Neuton-Bold.ttf"),
    "Neuton-Regular": require("../assets/fonts/Neuton-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginTop: 15 }}>
        <Image style={styles.image} source={logo} />
      </View>
      <View>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Name" />
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          textContentType="emailAddress"
          style={styles.input}
          placeholder="Email"
        />
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Password" />
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontFamily: "Neuton-Bold",
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
        <View style={{ marginTop: 20, alignItems: "center", width: "100%" }}>
          <Text
            style={{
              fontFamily: "Neuton-Regular",
              fontSize: 18,
            }}
          >
            or continue with
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "35%",
              justifyContent: "space-between",
              marginTop: 15,
            }}
          >
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../assets/google.png")}
            />
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../assets/fb.png")}
            />
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../assets/tw.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  image: {
    width: 200,
    height: 200,
  },
  input: {
    padding: 12,
    borderBottomWidth: 2,
    borderWidth: 1,
    borderColor: "#A9AAAA",
    borderRadius: 7,
  },
  label: {
    color: "#A9AAAA",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
    fontFamily: "Neuton-Regular",
  },
  button: {
    backgroundColor: "#4FAE5A",
    padding: 15,
    width: 200,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },
});

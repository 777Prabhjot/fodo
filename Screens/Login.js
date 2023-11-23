import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useLoginStore } from "../store";
import { router } from "expo-router";
const logo = require("../assets/logo1.png");

const Login = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const userLogin = useLoginStore((state) => state.login);

  const handleChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleLogin = () => {
    setLoading(true);
    userLogin({
      name: values.name,
      email: values.email,
      password: values.password,
    });

    setTimeout(() => {
      setLoading(false);
      router.replace("/");
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginTop: 15 }}>
        <Image style={styles.image} source={logo} />
      </View>
      <View>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={values.name}
          onChangeText={(text) => handleChange("name", text)}
        />
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          textContentType="emailAddress"
          style={styles.input}
          placeholder="Email"
          value={values.email}
          onChangeText={(text) => handleChange("email", text)}
        />
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={values.password}
          onChangeText={(text) => handleChange("password", text)}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <TouchableOpacity style={styles.button} activeOpacity={0.6}>
          {!loading ? (
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontFamily: "Neuton-Bold",
              }}
              onPress={handleLogin}
            >
              Sign up
            </Text>
          ) : (
            <ActivityIndicator size="small" color="white" />
          )}
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

export default Login;

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

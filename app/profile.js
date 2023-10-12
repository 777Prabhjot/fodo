import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FIcon from "react-native-vector-icons/Feather";
import MIcon from "react-native-vector-icons/MaterialIcons";
import AIcon from "react-native-vector-icons/AntDesign";
import { useLoginStore } from "../store";
import { router } from "expo-router";

const profile = () => {
  const logout = useLoginStore((state) => state.logout);
  const userInfo = useLoginStore((state) => state.user);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/bg.jpg")} />
      <View style={{ position: "absolute", top: 120, left: 100 }}>
        <Image
          style={styles.profileImage}
          source={require("../assets/prf.jpeg")}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 75 }}>
        <Text
          style={{
            fontSize: 23,
            fontFamily: "Neuton-Bold",
            textTransform: "capitalize",
          }}
        >
          {userInfo?.name}
        </Text>
      </View>
      <View style={{ padding: 25 }}>
        <View
          style={{
            backgroundColor: "white",
            padding: 15,
            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 3.05,
            elevation: 1,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FIcon name="shopping-bag" size={25} />
              <Text
                style={{
                  marginStart: 20,
                  fontFamily: "Neuton-Regular",
                  fontSize: 17,
                }}
              >
                My orders
              </Text>
            </View>
            <MIcon name="arrow-forward-ios" size={15} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FIcon name="edit-3" size={25} />
              <Text
                style={{
                  marginStart: 20,
                  fontFamily: "Neuton-Regular",
                  fontSize: 17,
                }}
              >
                Edit profile
              </Text>
            </View>
            <MIcon name="arrow-forward-ios" size={15} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FIcon name="settings" size={25} />
              <Text
                style={{
                  marginStart: 20,
                  fontFamily: "Neuton-Regular",
                  fontSize: 17,
                }}
              >
                Settings
              </Text>
            </View>
            <MIcon name="arrow-forward-ios" size={15} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 25,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FIcon name="lock" size={25} />
              <Text
                style={{
                  marginStart: 20,
                  fontFamily: "Neuton-Regular",
                  fontSize: 17,
                }}
              >
                Change password
              </Text>
            </View>
            <MIcon name="arrow-forward-ios" size={15} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ paddingHorizontal: 25 }}>
        <View
          style={{
            backgroundColor: "white",
            padding: 15,
            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 3.05,
            elevation: 1,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onPress={() => {
              logout();
              router.replace("/");
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AIcon name="logout" color="red" size={25} />
              <Text
                style={{
                  marginStart: 20,
                  fontFamily: "Neuton-Regular",
                  fontSize: 17,
                }}
              >
                Log Out
              </Text>
            </View>
            <MIcon name="arrow-forward-ios" size={15} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    position: "relative",
    backgroundColor: "#F9F9F9",
  },
  image: {
    width: "100%",
    height: "30%",
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 100,
    position: "absolute",
    borderWidth: 5,
    borderColor: "white",
  },
});

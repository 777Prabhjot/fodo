import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import Banner from "../components/Banner";
import Categories from "../Screens/Categories";
import Featured from "../Screens/Featured";
import { useFonts } from "expo-font";
import { useLoginStore } from "../store";
import Login from "../Screens/Login";

const index = () => {
  const userInfo = useLoginStore((state) => state.user);

  const [fontsLoaded] = useFonts({
    "Neuton-Italic": require("../assets/fonts/Neuton-Italic.ttf"),
    "Neuton-Bold": require("../assets/fonts/Neuton-Bold.ttf"),
    "Neuton-Regular": require("../assets/fonts/Neuton-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      {userInfo ? (
        <View style={{ backgroundColor: "#FFFFFF", paddingTop: 40 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <Banner />
              <Categories />
              <Featured />
            </View>
          </ScrollView>
          <StatusBar style="auto" />
        </View>
      ) : (
        <Login />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "5%",
  },
});

export default index;

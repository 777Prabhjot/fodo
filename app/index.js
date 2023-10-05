import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Banner from "../components/Banner";
import Categories from "../Screens/Categories";
import Featured from "../Screens/Featured";

const index = () => {
  return (
    <View style={{ backgroundColor: "#FFFFFF" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Banner />
          <Categories />
          <Featured />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "5%",
  },
});

export default index;

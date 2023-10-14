import { Tabs } from "expo-router";
import Icon from "react-native-vector-icons/Entypo";
import ShopIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IIcon from "react-native-vector-icons/Ionicons";
import { useLoginStore } from "../store";

export default function HomeLayout() {
  const userInfo = useLoginStore((state) => state.user);

  return (
    <>
      {!userInfo ? (
        <Tabs>
          <Tabs.Screen
            name="index"
            options={{
              headerShown: false,
              tabBarHideOnKeyboard: true,
              tabBarStyle: {
                display: "none",
              },
              tabBarIcon: ({ focused }) => (
                <Icon name="home" size={25} color={focused && "#4FAE5A"} />
              ),
              tabBarShowLabel: false,
            }}
          />
        </Tabs>
      ) : (
        <Tabs>
          <Tabs.Screen
            name="index"
            options={{
              // headerTitle: "Foodoo",
              headerShown: false,
              tabBarHideOnKeyboard: true,
              tabBarIcon: ({ focused }) => (
                <Icon name="home" size={25} color={focused && "#4FAE5A"} />
              ),
              tabBarShowLabel: false,
            }}
          />
          <Tabs.Screen
            name="(foods)"
            options={{
              headerShown: false,
              tabBarHideOnKeyboard: true,
              tabBarIcon: ({ focused }) => (
                <ShopIcon
                  name="shopping-search"
                  size={25}
                  color={focused && "#4FAE5A"}
                />
              ),
              tabBarShowLabel: false,
            }}
          />
          <Tabs.Screen
            name="(profile)"
            options={{
              headerShown: false,
              tabBarHideOnKeyboard: true,
              tabBarIcon: ({ focused }) => (
                <IIcon
                  name="person-circle-sharp"
                  size={32}
                  color={focused && "#4FAE5A"}
                />
              ),
              tabBarShowLabel: false,
            }}
          />
        </Tabs>
      )}
    </>
  );
}

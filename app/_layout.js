import { Slot, Tabs } from "expo-router";
import Icon from "react-native-vector-icons/Entypo";
import ShopIcon from "react-native-vector-icons/MaterialCommunityIcons";
import HeartIcon from "react-native-vector-icons/AntDesign";
import UserIcon from "react-native-vector-icons/FontAwesome5";
import SearchIcon from "react-native-vector-icons/AntDesign";

export default function HomeLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={25} color={focused && "#4FAE5A"} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="foods"
        options={{
          headerTitle: "Foods",
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
        name="wishlist"
        options={{
          headerTitle: "Wishlist",
          tabBarIcon: ({ focused }) => (
            <HeartIcon name="heart" size={25} color={focused && "#4FAE5A"} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          tabBarIcon: ({ focused }) => (
            <UserIcon
              name="user-circle"
              size={25}
              color={focused && "#4FAE5A"}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="(draw)"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}

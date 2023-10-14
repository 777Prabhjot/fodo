import { Stack } from "expo-router";
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="profile"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="myorders"
        options={{
          presentation: "modal",
          headerShown: false,
          animation: "fade_from_bottom",
        }}
      />
    </Stack>
  );
}

import { Stack } from "expo-router";
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="foods"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
          headerShown: false,
          animation: "fade_from_bottom",
        }}
      />
      <Stack.Screen
        name="order"
        options={{
          headerTitle: "Add Address to Order",
          headerShown: false,
        }}
      />
    </Stack>
  );
}

import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="(stack1)" options={{ title: "Stack 1" }} />
      <Tabs.Screen name="(stack2)" options={{ title: "Stack 2" }} />
      <Tabs.Screen name="(stack3)" options={{ title: "Stack 3" }} />
    </Tabs>
  );
}

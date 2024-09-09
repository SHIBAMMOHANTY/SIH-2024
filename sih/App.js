import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/Menu";
import TimeSheetScreen from "./screens/TImeSheet";
import TimeClockScreen from "./screens/TimeClock";
import MessageScreen from "./screens/Message";
import ProfileScreen from "./screens/ProfileScreen"; // Profile screen for navigation in header
import Ionicons from "react-native-vector-icons/Ionicons"; // For icons
import { TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            let iconSize = 28;
            if (route.name === "Home") {
              iconName = "home-outline"; // Home icon
              iconSize = iconSize + 8;
            } else if (route.name === "TimeSheet") {
              iconName = "document-text-outline"; // Timesheet icon
            } else if (route.name === "TimeClock") {
              iconName = "time-outline"; // Time clock icon
            } else if (route.name === "Message") {
              iconName = "chatbubble-outline"; // Message icon
            } else if (route.name === "Menu") {
              iconName = "menu-outline"; // Menu icon
            }

            return <Ionicons name={iconName} size={iconSize} color={color} />;
          },
          // Custom header with profile icon on the right side
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Profile")} // Navigate to Profile screen
              style={{ marginRight: 15 }}
            >
              <Ionicons name="person-circle-outline" size={36} color="black" />
            </TouchableOpacity>
          ),
          headerShown: true, // Show the custom header
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="TimeSheet" component={TimeSheetScreen} />
        <Tab.Screen name="TimeClock" component={TimeClockScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Message" component={MessageScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ tabBarButton: () => null, tabBarVisible: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

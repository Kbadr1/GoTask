import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import AddTask from "../../screens/AddTask";
import { Pressable, Text } from "react-native";
import HomeStackScreen from "./HomeStackScreen";
import CategoriesStackScreen from "./CategoriesStackScreen";
import AllTasksStackScreen from "./AllTasksStackScreen";
import SearchStackScreen from "./SearchStackScreen";
import AddTaskStackScreen from "./AddTaskStackScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home-sharp" : "home-outline";
            } else if (route.name === "Categories") {
              iconName = focused ? "layers-outline" : "layers-outline";
            } else if (route.name === "AllTasks") {
              iconName = focused ? "albums-outline" : "albums-outline";
            } else if (route.name === "AddTask") {
              iconName = focused ? "add-outline" : "add-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search-outline" : "search-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: "#3787EB",
          tabBarInactiveTintColor: "#B2CFDE",
          tabBarShowLabel: false,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: "#F1F6FA",
          },
          headerTitleStyle: {
            fontFamily: "MontserratAlternates_600SemiBold",
            color: "#1D313B",
          },
          tabBarStyle: {
            height: 70,
            paddingRight: 120,
            borderTopLeftRadius: 20,
            borderTopWidth: 0,
            elevation: 0,
            position: "absolute",
          },
          tabBarHideOnKeyboard: true,
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Categories"
          component={CategoriesStackScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="AllTasks"
          component={AllTasksStackScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchStackScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="AddTask"
          component={AddTaskStackScreen}
          options={{
            headerShown: false,
            tabBarStyle: {
              display: "none",
            },
            tabBarButton: (props) => {
              return (
                <Pressable
                  {...props}
                  style={{
                    backgroundColor: "#3787EB",
                    borderRadius: 100,
                    height: 100,
                    width: 100,
                    borderColor: "#F1F6FA",
                    borderWidth: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    right: -120,
                    bottom: 30,
                  }}
                >
                  <Ionicons name={"add-outline"} size={40} color={"white"} />
                </Pressable>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;

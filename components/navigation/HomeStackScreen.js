import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import TaskDetails from "../../screens/TaskDetails";

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#F1F6FA",
        },
        headerTitleStyle: {
          fontFamily: "MontserratAlternates_600SemiBold",
        },
        headerShadowVisible: false,
        headerTitleAlign: "center",
      }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerTitle: "Home",
        }}
      />
      <HomeStack.Screen
        name="TaskDetails"
        component={TaskDetails}
        options={{
          headerTitle: "",
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;

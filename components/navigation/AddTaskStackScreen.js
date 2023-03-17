import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Pressable } from "react-native";
import AddTask from "../../screens/AddTask";
import Ionicons from "react-native-vector-icons/Ionicons";

const AddTaskStack = createNativeStackNavigator();

const AddTaskStackScreen = ({ navigation }) => {
  return (
    <AddTaskStack.Navigator
      screenOptions={{
        headerTitle: "Create New Task",
        tabBarStyle: {
          display: "none",
        },
        headerStyle: {
          backgroundColor: "#fff",
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "MontserratAlternates_600SemiBold",
        },
        headerShadowVisible: false,
      }}
    >
      <AddTaskStack.Screen
        name="AddTaskScreen"
        component={AddTask}
        options={{
          headerLeft: () => (
            <Pressable title="back" onPress={() => navigation.navigate("Home")}>
              <Ionicons name={"arrow-back-outline"} size={24} color={"#000"} />
            </Pressable>
          ),
        }}
      />
    </AddTaskStack.Navigator>
  );
};

export default AddTaskStackScreen;

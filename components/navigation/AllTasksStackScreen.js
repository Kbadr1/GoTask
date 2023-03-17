import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllTasks from "../../screens/AllTasks";
import TaskDetails from "../../screens/TaskDetails";

const AllTasksStack = createNativeStackNavigator();

const AllTasksStackScreen = ({ navigation }) => {
  return (
    <AllTasksStack.Navigator
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
      <AllTasksStack.Screen
        name="AllTasksScreen"
        component={AllTasks}
        options={{
          headerTitle: "All Tasks",
        }}
      />
      <AllTasksStack.Screen
        name="TaskDetails"
        component={TaskDetails}
        options={{
          headerTitle: "",
        }}
      />
    </AllTasksStack.Navigator>
  );
};

export default AllTasksStackScreen;

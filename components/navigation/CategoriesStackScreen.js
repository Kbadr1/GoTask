import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "../../screens/Categories";
import TaskDetails from "../../screens/TaskDetails";

const CategoriesStack = createNativeStackNavigator();

const CategoriesStackScreen = () => {
  return (
    <CategoriesStack.Navigator
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
      <CategoriesStack.Screen
        name="CategoriesScreen"
        component={Categories}
        options={{
          headerTitle: "Categories",
        }}
      />
      <CategoriesStack.Screen
        name="TaskDetails"
        component={TaskDetails}
        options={{
          headerTitle: "",
        }}
      />
    </CategoriesStack.Navigator>
  );
};

export default CategoriesStackScreen;

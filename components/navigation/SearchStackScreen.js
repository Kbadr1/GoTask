import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Search } from "../../screens/Search";
import TaskDetails from "../../screens/TaskDetails";

const SearchStack = createNativeStackNavigator();

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator
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
      <SearchStack.Screen
        component={Search}
        name={"SearchScreen"}
        options={{
          headerTitle: "Search",
        }}
      />
      <SearchStack.Screen
        name="TaskDetails"
        component={TaskDetails}
        options={{
          headerTitle: "",
        }}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;

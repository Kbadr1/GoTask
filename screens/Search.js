import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import Task from "../components/Task";
import { TasksContext } from "../context/TasksContext";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import moment from "moment";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Search = () => {
  const { tasks } = useContext(TasksContext);

  const [query, setQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

  const todayDate = moment();
  // const [date, setDate] = useState(todayDate);
  const [date, setDate] = useState(null);

  const [customDate, setCustomDate] = useState(new Date(Date.now()));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: customDate,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const handleSearch = () => {
    date !== null
      ? setFilteredTasks(
          tasks.filter(
            (task) =>
              task.title.toLowerCase().includes(query.toLowerCase()) &&
              moment(task.date).format("LL") === moment(date).format("LL")
          )
        )
      : setFilteredTasks(
          tasks.filter((task) =>
            task.title.toLowerCase().includes(query.toLowerCase())
          )
        );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Pressable style={styles.dateWrapper} onPress={showDatepicker}>
          <Ionicons name={"calendar"} size={22} color={"#3787EB"} />
        </Pressable>
        <TextInput
          style={styles.searchInput}
          placeholder="Search your tasks"
          value={query}
          onChangeText={(text) => setQuery(text)}
        />
        <Pressable style={styles.searchButton} onPress={() => handleSearch()}>
          <Ionicons name={"search-outline"} size={22} color={"#fff"} />
        </Pressable>
      </View>
      {/* {filteredTasks.map((task) => (
        <Task task={task} key={task.id} />
      ))} */}
      {date === null && query === ""
        ? tasks.map((task) => <Task task={task} key={task.id} />)
        : filteredTasks.map((task) => <Task task={task} key={task.id} />)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#F1F6FA",
  },
  searchInput: {
    fontFamily: "MontserratAlternates_500Medium",
    borderWidth: 1,
    borderColor: "#E4E4E9",
    padding: 10,
    marginBottom: 20,
    height: 50,
    backgroundColor: "#fff",
    flex: 1,

    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  dateWrapper: {
    backgroundColor: "#fff",
    padding: 10,
    height: 50,
    borderWidth: 1,
    borderColor: "#E4E4E9",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  searchButton: {
    backgroundColor: "#3787EB",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});

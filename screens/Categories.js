import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TasksContext } from "../context/TasksContext";
import Task from "../components/Task";
import moment from "moment";

const Categories = () => {
  const { tasks } = useContext(TasksContext);
  const categorizedTasks = tasks.reduce((acc, curr) => {
    const { id, category, title, date, completed } = curr;
    if (!acc[category.title]) {
      acc[category.title] = {
        tasks: [],
      };
    }
    acc[category.title].tasks.push({ title, id, category, date, completed });
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      {Object.keys(categorizedTasks).map((key, index) => (
        <View key={index}>
          <Text style={styles.categoryTitle}>{key}</Text>
          {categorizedTasks[key].tasks.map((task, index) => (
            <Task task={task} key={task.id} />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F6FA",
    paddingHorizontal: 16,
  },
  categoryTitle: {
    marginBottom: 20,
    fontSize: 20,
    fontFamily: "MontserratAlternates_600SemiBold",
  },
});

export default Categories;

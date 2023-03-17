import React, { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TasksContext } from "../context/TasksContext";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

const Task = ({ task }) => {
  const { deleteTask, completeTask } = useContext(TasksContext);
  const navigation = useNavigation();

  return (
    <View style={styles.taskWrapper}>
      <View>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.date}>{moment(task.date).format("LL")}</Text>
      </View>
      <Pressable
        onPress={() => navigation.navigate("TaskDetails", { id: task.id })}
      >
        <Ionicons
          name={"chevron-forward-outline"}
          size={28}
          color={"#C1C1C1"}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  taskWrapper: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    marginBottom: 10,
    fontSize: 16,
    fontFamily: "MontserratAlternates_500Medium",
  },
  date: {
    fontSize: 11,
    color: "#4B6D7E",
    fontFamily: "MontserratAlternates_300Light",
  },
});

export default Task;

import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TasksContext } from "../context/TasksContext";
import Ionicons from "react-native-vector-icons/Ionicons";

const TaskDetails = ({ route, navigation }) => {
  const { id } = route.params;
  const { tasks, completeTask } = useContext(TasksContext);

  const [task, setTask] = useState({});

  const getTaskById = () => {
    tasks.filter((task) => task.id === id).map((task) => setTask(task));
  };

  useEffect(() => {
    getTaskById();
  }, [id, task.completed]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.taskTitle}>{task.title}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <Text style={styles.category}>{task?.category?.title}</Text>
        <Pressable onPress={() => completeTask(task.id)}>
          <Text
            style={[
              styles.status,
              {
                color: task.completed ? "#00791a" : "#800505",
              },
            ]}
          >
            {task.completed ? "Completed" : "Ongoing"}
          </Text>
        </Pressable>
      </View>

      <View style={styles.dateWrapper}>
        <View style={styles.dateIconWrapper}>
          <Ionicons name={"calendar"} size={25} color={"#3787EB"} />
        </View>
        <Text style={styles.date}>{moment(task.date).format("LL")}</Text>
      </View>
      <Text style={styles.overview}>OverView</Text>
      <Text style={styles.description}>{task.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F6FA",
    paddingHorizontal: 16,
  },
  taskTitle: {
    fontFamily: "MontserratAlternates_700Bold",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 30,
  },
  category: {
    fontSize: 20,
    fontFamily: "MontserratAlternates_600SemiBold",
  },
  status: {
    fontFamily: "MontserratAlternates_500Medium",
  },
  dateWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 30,
  },
  dateIconWrapper: {
    backgroundColor: "#daeafc",
    borderRadius: 100,
    padding: 6,
    height: 40,
    width: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  date: {
    // fontSize: 11,
    color: "#4B6D7E",
    fontFamily: "MontserratAlternates_500Medium",
  },
  overview: {
    fontSize: 20,
    fontFamily: "MontserratAlternates_600SemiBold",
    marginBottom: 10,
  },
  description: {
    fontFamily: "MontserratAlternates_400Regular",
    color: "#000000",
    lineHeight: 24,
    marginBottom: 30,
  },
});

export default TaskDetails;

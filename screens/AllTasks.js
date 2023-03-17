import React, { useContext } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { TasksContext } from "../context/TasksContext";
import Task from "../components/Task";
import { LinearGradient } from "expo-linear-gradient";

const AllTasks = () => {
  const { tasks, completedTasks, ongoingTasks } = useContext(TasksContext);
  const percentage =
    (completedTasks.length / (completedTasks.length + ongoingTasks.length)) *
    100;

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
    >
      <LinearGradient
        style={styles.achivementWrapper}
        colors={["#71d7f7", "#37b2eb", "#3787eb"]}
        start={[0, 1]}
        end={[1, 0]}
      >
        <Text style={styles.achivemenTitle}>Achivement</Text>
        <View style={[styles.flexColCenter, { marginBottom: 20 }]}>
          <Text style={styles.percentage}>
            {percentage.toPrecision(percentage == 0 ? 1 : 3)}%
          </Text>
        </View>
        <View style={styles.statsWrapper}>
          <View style={styles.flexColCenter}>
            <Text style={styles.stat}>Completed</Text>
            <Text style={styles.count}>{completedTasks.length}</Text>
          </View>
          <View style={styles.flexColCenter}>
            <Text style={styles.stat}>On Going</Text>
            <Text style={styles.count}>{ongoingTasks.length}</Text>
          </View>
        </View>
      </LinearGradient>

      {tasks
        .sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
        .map((task) => (
          <Task task={task} key={task.id} />
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F6FA",
    paddingHorizontal: 16,
  },
  achivementWrapper: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
  },
  achivemenTitle: {
    fontFamily: "MontserratAlternates_600SemiBold",
    fontSize: 16,
    marginBottom: 20,
    color: "#fff",
  },
  percentage: {
    fontFamily: "MontserratAlternates_500Medium",
    fontSize: 28,
    color: "#fff",
  },
  stat: {
    fontFamily: "MontserratAlternates_500Medium",
    fontSize: 14,
    color: "#fff",
  },
  count: {
    fontFamily: "MontserratAlternates_500Medium",
    fontSize: 16,
    color: "#fff",
  },
  flexColCenter: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  statsWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default AllTasks;

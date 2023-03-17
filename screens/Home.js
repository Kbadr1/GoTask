import React, { useContext } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TasksContext } from "../context/TasksContext";
import * as Progress from "react-native-progress";
import Task from "../components/Task";

const Home = () => {
  const { todayTasks, todayCompletedTasks } = useContext(TasksContext);

  const progress = todayCompletedTasks.length / todayTasks.length;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#71d7f7", "#37b2eb", "#3787eb"]}
        style={styles.summaryWrapper}
        start={[0, 1]}
        end={[1, 0]}
      >
        <Text style={styles.summaryTitle}>Today's progress summary</Text>
        <Text style={styles.count}>{todayTasks.length} Tasks</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.progressText}>Progress</Text>
          <Text style={styles.progressText}>
            {(progress * 100).toPrecision(progress == 0 ? 1 : 3)}%
          </Text>
        </View>
        <Progress.Bar
          progress={progress}
          width={Dimensions.get("window").width - 72}
          color={"#fff"}
          unfilledColor={"#ffffff6a"}
          borderWidth={0}
        />
      </LinearGradient>
      <View>
        <Text style={styles.header}>Today's Tasks</Text>
        {todayTasks.map((task) => {
          return <Task task={task} key={task.id} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F6FA",
    paddingHorizontal: 16,
  },
  summaryWrapper: {
    padding: 20,
    borderRadius: 20,
    marginBottom: 30,
  },
  summaryTitle: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "MontserratAlternates_600SemiBold",
    marginBottom: 10,
  },
  count: {
    fontFamily: "MontserratAlternates_500Medium",
    color: "#fff",
    marginBottom: 20,
  },
  progressText: {
    fontFamily: "MontserratAlternates_500Medium",
    color: "#fff",
    marginBottom: 10,
  },
  header: {
    fontFamily: "MontserratAlternates_600SemiBold",
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Home;

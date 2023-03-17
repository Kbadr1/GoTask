import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { TasksContext } from "../context/TasksContext";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import moment from "moment";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const AddTask = () => {
  const { addTask, categories } = useContext(TasksContext);
  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const todayDate = moment();
  const [date, setDate] = useState(todayDate);
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

  const handleSubmit = (title, date, category, description) => {
    if (title.trim() === "") {
      Alert.alert("Oops!", "Task title is required.");
    } else if (description.trim() === "") {
      Alert.alert("Oops!", "Task Description is required.");
    } else {
      addTask(title, date, category, description);
      navigation.navigate("AllTasks");
    }
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.screenWrapper}>
        <View>
          <Text style={styles.label}>Task title</Text>
          <TextInput
            style={styles.titleInput}
            placeholder=""
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          <Text style={styles.label}>Category</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ flexGrow: 0, marginBottom: 30 }}
            endFillColor={"#fff"}
            overScrollMode="never"
          >
            {categories.map((cat, index) => {
              return (
                <Pressable key={cat.id} onPress={() => setCategory(cat)}>
                  <Text
                    style={[
                      styles.category,
                      {
                        marginRight: categories.length - 1 == index ? 0 : 10,
                        backgroundColor:
                          cat === category ? "#3787EB" : "#ECF4FD",
                        color: cat === category ? "#fff" : "#000",
                      },
                    ]}
                  >
                    {cat.title}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
          <Text style={styles.label}>Due</Text>
          <Pressable onPress={showDatepicker}>
            <View style={styles.dateWrapper}>
              <Text style={styles.selectedDate}>
                {moment(date).format("LL")}
              </Text>
              <Ionicons name={"calendar"} size={22} color={"#3787EB"} />
            </View>
          </Pressable>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[
              styles.titleInput,
              {
                height: "auto",
                minHeight: 100,
                lineHeight: 20,
              },
            ]}
            placeholder=""
            value={description}
            onChangeText={(text) => setDescription(text)}
            multiline={true}
            textAlignVertical={"top"}
          />
        </View>
        <Pressable
          style={styles.submitButton}
          onPress={() => handleSubmit(title, date, category, description)}
        >
          <Text style={styles.submitText}>Create Task</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  screenWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
  },
  label: {
    fontFamily: "MontserratAlternates_700Bold",
    marginBottom: 10,
    fontSize: 18,
  },
  titleInput: {
    fontFamily: "MontserratAlternates_500Medium",
    borderWidth: 1,
    borderColor: "#E4E4E9",
    borderRadius: 10,
    padding: 10,
    marginBottom: 30,
    height: 50,
    color: "#3b555a",
  },
  dateWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#E4E4E9",
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    height: 50,
    marginBottom: 30,
  },
  selectedDate: {
    fontFamily: "MontserratAlternates_500Medium",
  },
  category: {
    fontFamily: "MontserratAlternates_500Medium",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#3787EB",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 45,
    marginBottom: 16,
  },
  submitText: {
    color: "#fff",
    fontFamily: "MontserratAlternates_600SemiBold",
    fontSize: 18,
    textAlign: "center",
  },
});

export default AddTask;

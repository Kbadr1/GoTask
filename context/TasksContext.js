import moment from "moment";
import { createContext, useEffect, useState } from "react";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TasksContext = createContext();

const TasksContextProvider = (props) => {
  const intialState = [
    {
      title: "UI Design",
      id: uuid.v4(),
      date: moment().subtract(0, "days"),
      category: { title: "Design", id: uuid.v4() },
      completed: false,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      title: "Web Development",
      id: uuid.v4(),
      date: moment().add(4, "days"),
      category: { title: "Development", id: uuid.v4() },
      completed: false,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  let categoriesIntialState = [
    { title: "Design", id: uuid.v4() },
    { title: "Development", id: uuid.v4() },
    { title: "Meeting", id: uuid.v4() },
    { title: "Training", id: uuid.v4() },
    { title: "Reading", id: uuid.v4() },
    { title: "Learning", id: uuid.v4() },
    { title: "Grinding", id: uuid.v4() },
  ];

  const [tasks, setTasks] = useState(intialState);
  const [categories, setCategories] = useState(categoriesIntialState);

  const [completedTasks, setCompletedTasks] = useState(
    tasks.filter((task) => task.completed === true)
  );
  const [ongoingTasks, setOngoingTasks] = useState(
    tasks.filter((task) => task.completed === false)
  );

  const [todayTasks, setTodayTasks] = useState(
    tasks.filter(
      (task) => moment(task.date).format("LL") === moment().format("LL")
    )
  );

  const [todayCompletedTasks, setTodayCompletedTasks] = useState(
    tasks
      .filter(
        (task) => moment(task.date).format("LL") === moment().format("LL")
      )
      .filter((task) => task.completed === true)
  );
  const [todayOngoingTasks, setTogayOngoingTasks] = useState(
    tasks
      .filter(
        (task) => moment(task.date).format("LL") === moment().format("LL")
      )
      .filter((task) => task.completed === false)
  );

  const addTask = (title, date, category, description) => {
    setTasks([
      ...tasks,
      { title, date, id: uuid.v4(), category, completed: false, description },
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  useEffect(() => {
    setCompletedTasks(tasks.filter((task) => task.completed === true));
    setOngoingTasks(tasks.filter((task) => task.completed === false));
    setTodayTasks(
      tasks.filter(
        (task) => moment(task.date).format("LL") === moment().format("LL")
      )
    );
    setTodayCompletedTasks(
      tasks
        .filter(
          (task) => moment(task.date).format("LL") === moment().format("LL")
        )
        .filter((task) => task.completed === true)
    );
    setTogayOngoingTasks(
      tasks
        .filter(
          (task) => moment(task.date).format("LL") === moment().format("LL")
        )
        .filter((task) => task.completed === false)
    );
  }, [tasks]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        categories,
        completedTasks,
        ongoingTasks,
        completeTask,
        todayTasks,
        todayCompletedTasks,
        todayOngoingTasks,
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;

import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data";

const initialState = data;
// const initialState = [];

const taskSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    addNewTask: (state = initialState, action) => {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        title: action.payload.title,
        description: action.payload.decription,
        checked: false,
      };
      state.unshift(newTask);
    },

    checkTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].checked = action.payload.checked;
    },

    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
  },
});

export const { addNewTask, checkTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;

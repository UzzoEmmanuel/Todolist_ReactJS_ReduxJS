import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data";

const initialState = data;

const taskSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    addNewTask: (state, action) => {
      const task = {
        id: Math.random() * 100,
        title: action.payload.title,
        description: action.payload.decription,
        checked: false,
      };
      state.push(task);

      console.log(state);
      console.log(task);
    },

    checkTask: (state, action) => {
      state = state.push(state.splice(action, 1)[0]);
    },
  },
});

export const { addNewTask, checkTask } = taskSlice.actions;

export default taskSlice.reducer;

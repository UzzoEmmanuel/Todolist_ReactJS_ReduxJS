import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  // const [list, setList] = useState([]);
  // const [inputTitle, setInputTitle] = useState("");
  // const [inputDescription, setInputDescription] = useState("");

  // const addTask = (title, description) => {
  //   const newTask = {
  //     id: Math.random(),
  //     title: title,
  //     description: description,
  //   };
  //   setList([...list, newTask]);
  //   setInputTitle("");
  //   setInputDescription("");
  // };

  // const deleteTask = (id) => {
  //   const newList = list.filter((task) => task.id !== id);
  //   setList(newList);
  // };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

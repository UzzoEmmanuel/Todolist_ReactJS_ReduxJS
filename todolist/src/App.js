import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const addTask = (title, description) => {
    const newTask = {
      id: Math.random(),
      title: title,
      description: description,
    };
    setList([...list, newTask]);
    setInputTitle("");
    setInputDescription("");
  };

  const deleteTask = (id) => {
    const newList = list.filter((task) => task.id !== id);
    setList(newList);
  };

  return (
    <div>
      <h1>Todolist bien stressante</h1>
      <form>
        <h2>Chose à ajouter</h2>
        <input
          type="text"
          placeholder="titre"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          value={inputDescription}
          onChange={(e) => setInputDescription(e.target.value)}
        />
        <button onClick={() => addTask(inputTitle, inputDescription)}>
          Ajouter
        </button>
      </form>
      <h2>choses à faire</h2>
      <ul>
        <li>tache</li>
        {list.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => deleteTask(task.id)}>C'est fait !</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

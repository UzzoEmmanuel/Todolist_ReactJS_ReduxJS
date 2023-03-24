import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../../redux/tasksSlice";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleAddNewTask = (e) => {
    e.preventDefault();
    dispatch(addNewTask({ title: title, decription: description }));
  };
  return (
    <section>
      <h2>Tâche à ajouter:</h2>
      <form onSubmit={handleAddNewTask}>
        <input
          type="text"
          placeholder="titre"
          onInput={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          onInput={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
    </section>
  );
};

export default AddTask;

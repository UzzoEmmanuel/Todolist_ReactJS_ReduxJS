import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../../redux/tasksSlice";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const onlyWhiteSpace = (title) => title.trim().length === 0;

  const handleAddNewTask = (event) => {
    event.preventDefault();
    if (onlyWhiteSpace(title)) {
      alert("une tâche doit avoir un titre");
      event.target.reset();
    } else {
      dispatch(addNewTask({ title: title, decription: description }));
      event.target.reset();
    }
  };

  return (
    <section>
      <h2>Tâche à ajouter:</h2>
      <form onSubmit={handleAddNewTask}>
        <input
          type="text"
          placeholder="titre"
          required
          title={title}
          onInput={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          description={description}
          onInput={(event) => setDescription(event.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
    </section>
  );
};

export default AddTask;

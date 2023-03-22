import data from "../../data/data";

const TasksList = () => {
  return (
    <section>
      <h2>Liste des tâches:</h2>
      <ul>
        {data.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </section>
  );
};

export default TasksList;

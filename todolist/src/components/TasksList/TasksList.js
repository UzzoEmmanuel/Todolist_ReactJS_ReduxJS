import { useSelector } from "react-redux";
import Task from "../Task/Task";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <section>
      <h2>Liste des tâches:</h2>
      <ul>
        {tasks
          .slice()
          .sort((a, b) => a.checked - b.checked)
          .map((task) => (
            <Task
              id={task.id}
              title={task.title}
              description={task.description}
              checked={task.checked}
            />
          ))}
      </ul>
    </section>
  );
};

export default TasksList;

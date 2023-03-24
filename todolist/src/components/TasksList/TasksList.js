import { useDispatch, useSelector } from "react-redux";
import { checkTask } from "../../redux/tasksSlice";

const TasksList = () => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);

  const strikeText = () => {
    return (document.getElementsByClassName(
      "task_title"
    )[0].style.textDecoration = "line-through");
  };
  const handleTodoDone = () => {
    dispatch(checkTask());
    strikeText();
  };

  return (
    <section>
      <h2>Liste des tâches:</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="task_title">
            {task.title}
            <button
              type="submit"
              onClick={() => {
                handleTodoDone();
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TasksList;

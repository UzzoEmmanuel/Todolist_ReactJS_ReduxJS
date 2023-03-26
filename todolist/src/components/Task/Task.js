import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkTask, deleteTask } from "../../redux/tasksSlice";

const Task = ({ id, title, description, checked }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sendTaskData = () => {
    navigate("/description", {
      state: { title: title, description: description },
    });
  };

  const handleCheckTask = () => {
    dispatch(checkTask({ id, checked: !checked }));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask({ id }));
  };
  return (
    <li className="task">
      <input
        className="task_checkinput"
        type="checkbox"
        onClick={handleCheckTask}
        checked={checked}
      ></input>
      <button
        className="task_taskbutton"
        style={{ textDecoration: checked && "line-through" }}
        onClick={() => sendTaskData()}
      >
        {title}
      </button>
      <button className="task_deletebutton" onClick={handleDeleteTask}>
        X
      </button>
    </li>
  );
};

export default Task;

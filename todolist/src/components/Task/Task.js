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
    <li>
      <div>
        <span>
          <input
            type="checkbox"
            onClick={handleCheckTask}
            checked={checked}
          ></input>
          <button
            style={{ textDecoration: checked && "line-through" }}
            onClick={() => sendTaskData()}
          >
            {title}
          </button>
        </span>
        <button className="btn btn-danger" onClick={handleDeleteTask}>
          X
        </button>
      </div>
    </li>
  );
};

export default Task;

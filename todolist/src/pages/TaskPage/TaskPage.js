import TaskCard from "../../components/TaskCard/TaskCard";
import { useLocation } from "react-router-dom";

const TaskPage = () => {
  const location = useLocation();

  const title = location.state.title;
  const description = location.state.description;

  return (
    <div>
      <TaskCard title={title} description={description} />
    </div>
  );
};

export default TaskPage;

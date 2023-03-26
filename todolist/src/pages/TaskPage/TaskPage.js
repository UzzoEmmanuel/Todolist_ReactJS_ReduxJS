import Header from "../../components/Header/Header";
import TaskCard from "../../components/TaskCard/TaskCard";
import { useLocation } from "react-router-dom";

const TaskPage = () => {
  const location = useLocation();

  const title = location.state.title;
  const description = location.state.description;

  return (
    <body className="taskpage">
      <Header />
      <TaskCard title={title} description={description} />
    </body>
  );
};

export default TaskPage;

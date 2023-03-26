import Header from "../../components/Header/Header";
import AddTask from "../../components/AddTask/AddTask";
import TasksList from "../../components/TasksList/TasksList";

const HomePage = () => {
  return (
    <body className="homepage">
      <Header />
      <AddTask />
      <TasksList />
    </body>
  );
};

export default HomePage;

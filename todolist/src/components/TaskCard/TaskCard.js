const TaskCard = ({ title, description }) => {
  return (
    <div className="taskcard">
      <h2 className="taskcard_title">{title}</h2>
      <p className="taskcard_description">{description}</p>
    </div>
  );
};

export default TaskCard;

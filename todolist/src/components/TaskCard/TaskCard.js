const TaskCard = ({ title, description }) => {
  console.log(title, description);
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default TaskCard;

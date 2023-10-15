import TaskCard from "./TaskCard";

const TaskList = ({ Tasks }) => {
  return (
    <div className="task-container">
      <ol className="task-list">
        {Tasks.map((task) => {
              return <li key={task.taskDesc}> <TaskCard TaskDesc={task.taskDesc}/></li>;
        })}
      </ol>
    </div>
  );
};

export default TaskList;

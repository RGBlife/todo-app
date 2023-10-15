import { useState } from "react";
import { taskEmojis } from "../data/emojis";

const TaskAdder = ({ setList }) => {
  const [newTaskDesc, setNewTaskDesc] = useState("");
  const [emoji, setEmoji] = useState("");

  const addTask = (event) => {
    event.preventDefault();
    setList((currentTasks) => {
      const newTask = { taskDesc: newTaskDesc };
      return [...currentTasks, newTask];
    });
    if (!emoji) {
      alert("Please select an emoji type.");
      return;
    }
    setEmoji("")
    setNewTaskDesc("");
  };

  return (
    <div className="TaskAdder">
      <form onSubmit={addTask}>
        <select
          defaultValue={"Type"}
          value={emoji}
          onChange={(event) => setEmoji(event.target.value)}
        >
          <option value="" disabled selected>
            Type
          </option>
          {taskEmojis.map((emoji, index) => {
            return (
              <option key={index + emoji} value={emoji}>
                {emoji}
              </option>
            );
          })}
        </select>
        <label id="ButtonLabel" htmlFor="new-task">
          New Task:
        </label>

        <input
          id="new-task"
          onChange={(event) => {
            setNewTaskDesc(event.target.value);
          }}
          value={newTaskDesc}
          required
          placeholder="What needs to be done"
        />
        <button>Add Task!</button>
      </form>
    </div>
  );
};

export default TaskAdder;

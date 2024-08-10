import React, { useState } from "react";

const TaskPage = ({ onTasksUpdate }) => {
  const [taskName, setTaskName] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      const newTask = { name: taskName, completed };
      const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      localStorage.setItem("tasks", JSON.stringify([...savedTasks, newTask]));
      onTasksUpdate([...savedTasks, newTask]);
      setTaskName("");
      setCompleted(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Task Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Task Name</label>
          <input
            type="text"
            className="form-control"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              checked={completed}
              onChange={() => setCompleted(!completed)}
            />
            Completed
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskPage;

import React, { useState, useEffect } from "react";
import "./taskpage.css"; // Ensure you have corresponding CSS for styling

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newTaskType, setNewTaskType] = useState("personal");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("date");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObj = {
        id: Date.now(),
        title: newTask.trim(),
        type: newTaskType,
        status: "just-added",
        progress: 0,
        date: new Date(),
      };
      const updatedTasks = [...tasks, newTaskObj];
      setTasks(updatedTasks);
      setNewTask("");
      setNewTaskType("personal");
    }
  };

  const handleStatusChange = (id, status) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        let progress = 0;
        if (status === "completed") progress = 100;
        else if (status === "in-progress") progress = 50;
        else if (status === "just-added") progress = 0;

        return { ...task, status, progress };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleProgressChange = (id, progress) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, progress: parseInt(progress, 10) };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const getFilteredAndSortedTasks = () => {
    let filteredTasks = tasks;

    if (filter !== "all") {
      filteredTasks = tasks.filter((task) => {
        if (
          filter === "personal" ||
          filter === "work" ||
          filter === "shopping"
        ) {
          return task.type === filter;
        }
        return task.status === filter;
      });
    }

    if (sort === "date") {
      filteredTasks.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sort === "progress") {
      filteredTasks.sort((a, b) => b.progress - a.progress);
    }

    return filteredTasks;
  };

  return (
    <div>
      <div className="task-page">
        <h2>Task Management</h2>
        <div className="task-input">
          <input
            type="text"
            placeholder="Add new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <select
            value={newTaskType}
            onChange={(e) => setNewTaskType(e.target.value)}
          >
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="shopping">Shopping</option>
          </select>
          <button onClick={addTask} className="btn btn-secondary">
            Add Task
          </button>
        </div>
        <div className="filters">
          <select value={filter} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="shopping">Shopping</option>
            <option value="just-added">Just Added</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <select value={sort} onChange={handleSortChange}>
            <option value="date">Sort by Date</option>
            <option value="progress">Sort by Progress</option>
          </select>
        </div>
        <div className="task-list">
          {getFilteredAndSortedTasks().map((task) => (
            <div key={task.id} className={`task-item ${task.status}`}>
              <h3>{task.title}</h3>
              <p>
                <strong>Type:</strong> {task.type}
              </p>
              <p>
                <strong>Date Added:</strong>{" "}
                {new Date(task.date).toLocaleString()}
              </p>
              <div className="progress-container">
                <label>Progress: {task.progress}%</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={task.progress}
                  onChange={(e) =>
                    handleProgressChange(task.id, e.target.value)
                  }
                />
              </div>
              <div className="status-buttons">
                <button
                  className="status-button"
                  onClick={() => handleStatusChange(task.id, "just-added")}
                >
                  Mark as Just Added
                </button>

                <button
                  className="status-button"
                  onClick={() => handleStatusChange(task.id, "in-progress")}
                >
                  Mark as In Progress
                </button>
                <button
                  className="status-button"
                  onClick={() => handleStatusChange(task.id, "completed")}
                >
                  Mark as Completed
                </button>
                <button
                  className="status-button delete-button"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  Delete Task
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <p>Coded by Awolope Feranmi Esther</p>
        <p>&copy; {new Date().getFullYear()} TaskPro</p>
      </footer>
    </div>
  );
};

export default TaskPage;

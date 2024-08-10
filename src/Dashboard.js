import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = ({ tasks }) => {
  // Calculate task completion progress
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  const data = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        label: "Task Completion",
        data: [completedTasks, totalTasks - completedTasks],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <div className="mb-4">
        <h4>Task Progress</h4>
        <Line data={data} />
        <p>Task completion progress: {progress.toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default Dashboard;

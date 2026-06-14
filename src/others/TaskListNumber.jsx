import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthContext";

const TaskListNumber = () => {
  const { user } = useContext(AuthContext);
  const [taskCounts, setTaskCounts] = useState({
    newTasks: 0,
    activeTasks: 0,
    completedTasks: 0,
    failedTasks: 0,
  });

  const calculateTaskCounts = (tasks = []) => {
    const newTasks = tasks.filter(task => task.newTask).length;
    const activeTasks = tasks.filter(task => task.active).length;
    const completedTasks = tasks.filter(task => task.complete).length;
    const failedTasks = tasks.filter(task => task.failed).length;
    return { newTasks, activeTasks, completedTasks, failedTasks };
  };

  const loadTasks = () => {
    if (!user?.name) return;
    try {
      const employees = JSON.parse(localStorage.getItem("employe")) || [];
      const current = employees.find(emp => emp.name === user.name);
      if (current?.tasks) {
        setTaskCounts(calculateTaskCounts(current.tasks));
      }
    } catch {
      // Silently fail
    }
  };

  useEffect(() => {
    loadTasks();
    window.addEventListener("localStorageUpdated", loadTasks);
    return () => window.removeEventListener("localStorageUpdated", loadTasks);
  }, [user?.name]);

  return (
    <div className="stats-grid section-gap">
      {/* New Tasks */}
      <div className="stat-card stat-card--new">
        <div className="stat-icon">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <div className="stat-value">{taskCounts.newTasks}</div>
        <div className="stat-label">New Tasks</div>
      </div>

      {/* Active Tasks */}
      <div className="stat-card stat-card--active">
        <div className="stat-icon">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="stat-value">{taskCounts.activeTasks}</div>
        <div className="stat-label">Active</div>
      </div>

      {/* Completed */}
      <div className="stat-card stat-card--complete">
        <div className="stat-icon">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="stat-value">{taskCounts.completedTasks}</div>
        <div className="stat-label">Completed</div>
      </div>

      {/* Failed */}
      <div className="stat-card stat-card--failed">
        <div className="stat-icon">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div className="stat-value">{taskCounts.failedTasks}</div>
        <div className="stat-label">Failed</div>
      </div>
    </div>
  );
};

export default TaskListNumber;

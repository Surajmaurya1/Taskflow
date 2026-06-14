import React, { useState, useEffect } from "react";

const TaskListAdminDashboard = () => {
  const [employees, setEmployees] = useState([]);

  const getTaskCounts = (employee) => {
    if (!employee?.tasks) {
      return { newTasks: 0, activeTasks: 0, completedTasks: 0, failedTasks: 0 };
    }

    const newTasks = employee.tasks.filter(task => task.newTask === true).length;
    const activeTasks = employee.tasks.filter(task => task.active === true).length;
    const completedTasks = employee.tasks.filter(task => task.complete === true).length;
    const failedTasks = employee.tasks.filter(task => task.failed === true).length;

    return { newTasks, activeTasks, completedTasks, failedTasks };
  };

  useEffect(() => {
    const updateEmployeesFromStorage = () => {
      try {
        const stored = JSON.parse(localStorage.getItem("employe")) || [];
        setEmployees(stored);
      } catch {
        setEmployees([]);
      }
    };

    updateEmployeesFromStorage();
    window.addEventListener("localStorageUpdated", updateEmployeesFromStorage);
    return () => window.removeEventListener("localStorageUpdated", updateEmployeesFromStorage);
  }, []);

  return (
    <div className="employee-table section-gap">
      <div className="section-header">
        <h2>Team Overview</h2>
      </div>

      {/* Table Header */}
      <div className="table-header">
        <span>Employee</span>
        <span>New</span>
        <span>Active</span>
        <span>Done</span>
        <span>Failed</span>
        <span>Status</span>
      </div>

      {/* Table Body */}
      <div className="table-body">
        {employees.map((emp) => {
          const counts = getTaskCounts(emp);
          const totalTasks = (emp.tasks || []).length;

          return (
            <div key={emp.id} className="table-row">
              {/* Employee Info */}
              <div className="employee-info">
                <div className="employee-avatar">
                  {emp.name?.charAt(0).toUpperCase()}
                </div>
                <span className="employee-name">{emp.name}</span>
              </div>

              {/* Task Counts */}
              <div className="table-cell" style={{ color: 'var(--status-new)' }}>
                {counts.newTasks}
              </div>
              <div className="table-cell" style={{ color: 'var(--status-active)' }}>
                {counts.activeTasks}
              </div>
              <div className="table-cell" style={{ color: 'var(--status-complete)' }}>
                {counts.completedTasks}
              </div>
              <div className="table-cell" style={{ color: 'var(--status-failed)' }}>
                {counts.failedTasks}
              </div>

              {/* Status */}
              <div className="table-cell">
                {counts.activeTasks > 0 ? (
                  <span className="badge badge-active">
                    <span className="pulse-dot" style={{ background: 'var(--status-active)' }}></span>
                    Active
                  </span>
                ) : totalTasks > 0 ? (
                  <span className="badge badge-complete">Idle</span>
                ) : (
                  <span className="badge" style={{ color: 'var(--text-tertiary)', background: 'var(--bg-overlay)', borderColor: 'var(--border)' }}>
                    No Tasks
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskListAdminDashboard;

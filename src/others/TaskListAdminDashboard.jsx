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
    <section className="employee-table section-gap section-panel">
      <div className="section-header">
        <div>
          <span className="section-kicker">Delivery Visibility</span>
          <h2>Team overview</h2>
        </div>
        <p>Monitor assignment health and spot where support is needed.</p>
      </div>

      <div className="table-header">
        <span>Employee</span>
        <span>New</span>
        <span>Active</span>
        <span>Done</span>
        <span>Failed</span>
        <span>Status</span>
      </div>

      <div className="table-body">
        {employees.map((emp) => {
          const counts = getTaskCounts(emp);
          const totalTasks = (emp.tasks || []).length;

          return (
            <div key={emp.id} className="table-row">
              <div className="employee-info">
                <div className="employee-avatar">
                  {emp.name?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <span className="employee-name">{emp.name}</span>
                  <div className="employee-role-line">{emp.email}</div>
                </div>
              </div>

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
    </section>
  );
};

export default TaskListAdminDashboard;

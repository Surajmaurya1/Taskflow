import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { markTaskAsComplete } from "../LocalStorage/LocalStorage";

const TaskList = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  const getCurrentUserTasks = () => {
    if (!user?.name) return [];
    try {
      const employees = JSON.parse(localStorage.getItem("employe")) || [];
      const currentUser = employees.find(emp => emp.name === user.name);
      return currentUser?.tasks || [];
    } catch {
      return [];
    }
  };

  useEffect(() => {
    setTasks(getCurrentUserTasks());
  }, [user?.name]);

  useEffect(() => {
    const handleStorageUpdate = () => {
      setTasks(getCurrentUserTasks());
    };

    window.addEventListener('localStorageUpdated', handleStorageUpdate);
    window.addEventListener('storage', handleStorageUpdate);

    return () => {
      window.removeEventListener('localStorageUpdated', handleStorageUpdate);
      window.removeEventListener('storage', handleStorageUpdate);
    };
  }, [user?.name]);

  const handleComplete = (taskId) => {
    if (!user?.name) return;
    markTaskAsComplete(user.name, taskId);
    setTasks(getCurrentUserTasks());
  };

  const getCategoryClass = (category) => {
    switch (category?.toLowerCase()) {
      case 'development': return 'development';
      case 'bug fix': return 'bugfix';
      case 'review': return 'review';
      case 'design': return 'design';
      case 'devops': return 'devops';
      case 'marketing':
      case 'content':
      case 'analytics':
      case 'research': return 'marketing';
      case 'testing':
      case 'qa':
      case 'security': return 'testing';
      default: return 'default';
    }
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-GB', { 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric' 
      });
    } catch {
      return dateString;
    }
  };

  const getStatusBadge = (task) => {
    if (task.complete) {
      return (
        <span className="badge badge-complete">
          <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
          Completed
        </span>
      );
    }
    if (task.failed) {
      return (
        <span className="badge badge-failed">
          <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
          Failed
        </span>
      );
    }
    if (task.active) {
      return (
        <span className="badge badge-active">
          <span className="pulse-dot" style={{ background: 'var(--status-active)' }}></span>
          Active
        </span>
      );
    }
    if (task.newTask) {
      return (
        <span className="badge badge-new">
          <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
          New
        </span>
      );
    }
    return null;
  };

  if (tasks.length === 0) {
    return (
      <div className="section-gap" style={{ textAlign: 'center', padding: 'var(--space-2xl)', color: 'var(--text-tertiary)' }}>
        <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ margin: '0 auto var(--space-md)', opacity: 0.4 }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <p style={{ fontWeight: 500 }}>No tasks assigned yet</p>
        <p style={{ fontSize: '0.85rem', marginTop: '4px' }}>Tasks assigned to you will appear here.</p>
      </div>
    );
  }

  return (
    <div className="task-scroll section-gap">
      <div className="task-cards-row">
        {tasks.map((task) => {
          const catClass = getCategoryClass(task.category);
          
          return (
            <div key={task.id} className={`task-card task-card--${catClass}`}>
              {/* Accent bar */}
              <div className="task-card-accent"></div>
              
              {/* Header */}
              <div className="task-card-header">
                <span className="task-card-category">
                  {task.category}
                </span>
                <span className="task-card-date">
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(task.date)}
                </span>
              </div>

              {/* Body */}
              <h3 className="task-card-title">{task.taskTitle}</h3>
              <p className="task-card-desc">{task.description}</p>

              {/* Footer */}
              <div className="task-card-footer">
                {getStatusBadge(task)}
                
                {!task.complete && (
                  <button
                    onClick={() => handleComplete(task.id)}
                    className="btn btn-sm"
                    style={{ 
                      background: 'var(--status-complete-bg)', 
                      color: 'var(--status-complete)', 
                      border: '1px solid var(--status-complete-border)' 
                    }}
                  >
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Done
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;
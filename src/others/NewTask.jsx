import React, { useState, useEffect, useRef } from "react";
import { addTaskToEmployee } from "../LocalStorage/LocalStorage";

const NewTask = () => {
  const [taskTitle, setTasktitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [employees, setEmployees] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef(null);

  // Load employee list from localStorage for the dropdown
  useEffect(() => {
    const loadEmployees = () => {
      try {
        const data = JSON.parse(localStorage.getItem("employe")) || [];
        setEmployees(data);
      } catch {
        setEmployees([]);
      }
    };

    loadEmployees();
    window.addEventListener("localStorageUpdated", loadEmployees);
    return () => window.removeEventListener("localStorageUpdated", loadEmployees);
  }, []);

  const formHandle = (e) => {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem("employe")) || [];

    // Generate next task ID
    let maxId = 0;
    data.forEach(emp => {
      if (emp.tasks) {
        emp.tasks.forEach(task => {
          if (task.id > maxId) maxId = task.id;
        });
      }
    });

    const newTask = {
      id: maxId + 1,
      taskTitle,
      description,
      date,
      category,
      assignTo,
      active: false,
      newTask: true,
      complete: false,
      failed: false,
    };

    addTaskToEmployee(assignTo, newTask);

    // Success flash
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 600);

    // Reset form
    setTasktitle("");
    setDate("");
    setDescription("");
    setAssignTo("");
    setCategory("");
  };

  const categories = [
    "Development",
    "Design",
    "Bug Fix",
    "DevOps",
    "Marketing",
    "Testing",
    "QA",
    "Review",
    "Content",
    "Research",
    "Analytics",
    "Security",
    "Documentation",
  ];

  return (
    <div className={`card new-task-section section-gap ${showSuccess ? 'success-flash' : ''}`} style={{ padding: 'var(--space-lg)' }}>
      {/* Header */}
      <div className="section-header">
        <h2>Create New Task</h2>
        <p>Assign tasks to your team members</p>
      </div>

      <form ref={formRef} onSubmit={formHandle} className="new-task-form">
        {/* Left Column — Fields */}
        <div className="form-left">
          {/* Task Title */}
          <div className="input-group">
            <label className="input-label" htmlFor="task-title">Task Title</label>
            <input
              id="task-title"
              value={taskTitle}
              onChange={(e) => setTasktitle(e.target.value)}
              type="text"
              placeholder="e.g. Implement user authentication"
              className="input"
              required
            />
          </div>

          {/* Date */}
          <div className="input-group">
            <label className="input-label" htmlFor="task-date">Due Date</label>
            <input
              id="task-date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="input"
              required
            />
          </div>

          {/* Assign To — DROPDOWN */}
          <div className="input-group">
            <label className="input-label" htmlFor="task-assign">Assign To</label>
            <select
              id="task-assign"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="select"
              required
            >
              <option value="" disabled>Select an employee</option>
              {employees.map((emp) => (
                <option key={emp.id} value={emp.name}>
                  {emp.name}
                </option>
              ))}
            </select>
          </div>

          {/* Category — DROPDOWN */}
          <div className="input-group">
            <label className="input-label" htmlFor="task-category">Category</label>
            <select
              id="task-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="select"
              required
            >
              <option value="" disabled>Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Right Column — Description */}
        <div className="form-right">
          <div className="input-group" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <label className="input-label" htmlFor="task-desc">Task Details</label>
            <textarea
              id="task-desc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what needs to be done..."
              className="textarea"
              style={{ flex: 1 }}
              required
            ></textarea>
          </div>
        </div>

        {/* Submit */}
        <div className="form-submit">
          <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTask;

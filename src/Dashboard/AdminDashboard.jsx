import React from 'react'
import Header from '../Header/Header'
import NewTask from '../others/NewTask'
import TaskListAdminDashboard from '../others/TaskListAdminDashboard'

const AdminDashboard = () => {
  return (
    <div className="page-container">
      <Header />
      <NewTask />
      <TaskListAdminDashboard />
    </div>
  )
}

export default AdminDashboard

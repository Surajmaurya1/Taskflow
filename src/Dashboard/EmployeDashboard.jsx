import React from 'react'
import Header from '../Header/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeDashboard = () => {
  return (
    <div className="page-container">
      <Header />
      <TaskListNumber />
      <TaskList />
    </div>
  )
}

export default EmployeDashboard
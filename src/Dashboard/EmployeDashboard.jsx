import React from 'react'
import Header from '../Header/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'
import DashboardShell from '../Layout/DashboardShell'

const EmployeDashboard = () => {
  const navigation = [
    {
      label: 'My Focus',
      active: true,
      icon: 'F',
    },
    {
      label: 'Performance',
      icon: 'P',
    },
    {
      label: 'Schedule',
      icon: 'S',
    },
  ]

  return (
    <DashboardShell
      role="Employee Workspace"
      eyebrow="Personal Console"
      title="Stay focused with a cleaner daily workspace."
      subtitle="Review what matters now, monitor progress, and move tasks to completion with less visual noise."
      meta={
        <div className="hero-stat-stack">
          <span className="hero-meta-label">Work mode</span>
          <strong>Individual execution</strong>
        </div>
      }
      navigation={navigation}
    >
      <Header />
      <TaskListNumber />
      <TaskList />
    </DashboardShell>
  )
}

export default EmployeDashboard

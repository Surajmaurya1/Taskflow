import React from 'react'
import Header from '../Header/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'
import DashboardShell from '../Layout/DashboardShell'

const EmployeDashboard = () => {
  const navigation = [
    {
      label: 'My Focus',
      description: 'Assigned work and priorities',
      active: true,
      icon: '01',
    },
    {
      label: 'Performance',
      description: 'Completion and throughput',
      icon: '02',
    },
    {
      label: 'Schedule',
      description: 'Upcoming due dates',
      icon: '03',
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

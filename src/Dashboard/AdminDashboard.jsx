import React from 'react'
import Header from '../Header/Header'
import NewTask from '../others/NewTask'
import TaskListAdminDashboard from '../others/TaskListAdminDashboard'
import DashboardShell from '../Layout/DashboardShell'

const AdminDashboard = () => {
  const navigation = [
    {
      label: 'Overview',
      active: true,
      icon: 'O',
    },
    {
      label: 'Task Planning',
      icon: 'T',
    },
    {
      label: 'Team Capacity',
      icon: 'C',
    },
  ]

  return (
    <DashboardShell
      role="Admin Workspace"
      eyebrow="Control Center"
      title="Lead delivery with a clearer operating view."
      subtitle="Coordinate assignments, balance workload, and keep every contributor aligned inside one polished workspace."
      meta={
        <div className="hero-stat-stack">
          <span className="hero-meta-label">Team orchestration</span>
          <strong>Multi-user task operations</strong>
        </div>
      }
      navigation={navigation}
    >
      <Header />
      <NewTask />
      <TaskListAdminDashboard />
    </DashboardShell>
  )
}

export default AdminDashboard

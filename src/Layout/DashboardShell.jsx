import React from 'react'

const DashboardShell = ({
  role = 'workspace',
  title,
  subtitle,
  eyebrow,
  meta,
  actions,
  navigation = [],
  children,
}) => {
  return (
    <div className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <div className="sidebar-brand">
          <div className="sidebar-brand-mark">TF</div>
          <div>
            <p className="sidebar-eyebrow">TaskFlow Suite</p>
            <h1>Operations Hub</h1>
          </div>
        </div>

        <div className="sidebar-panel">
          <span className="sidebar-panel-label">Workspace Tier</span>
          <div className="sidebar-tier">
            <strong>Premium</strong>
            <span>{role}</span>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Primary">
          {navigation.map((item) => (
            <div
              key={item.label}
              className={`sidebar-nav-item${item.active ? ' is-active' : ''}`}
            >
              <span className="sidebar-nav-icon">{item.icon}</span>
              <div>
                <div className="sidebar-nav-label">{item.label}</div>
                <div className="sidebar-nav-description">{item.description}</div>
              </div>
            </div>
          ))}
        </nav>

        <div className="sidebar-note card-glass">
          <span className="sidebar-panel-label">Service Standard</span>
          <p>Calm motion, clear hierarchy, and sharper decision surfaces across the workspace.</p>
        </div>
      </aside>

      <main className="dashboard-main">
        <section className="hero-panel card-glass">
          <div className="hero-copy">
            {eyebrow && <span className="hero-eyebrow">{eyebrow}</span>}
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>

          <div className="hero-side">
            {meta && <div className="hero-meta">{meta}</div>}
            {actions && <div className="hero-actions">{actions}</div>}
          </div>
        </section>

        <div className="dashboard-content">{children}</div>
      </main>
    </div>
  )
}

export default DashboardShell

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
          <div className="sidebar-brand-copy">
            <p className="sidebar-eyebrow">TaskFlow</p>
            <h1>Operations Hub</h1>
          </div>
        </div>

        <div className="sidebar-workspace-pill">
          <span className="sidebar-workspace-dot" aria-hidden="true"></span>
          <div>
            <strong>{role}</strong>
            <span>Focused workspace</span>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Primary">
          {navigation.map((item) => (
            <div
              key={item.label}
              className={`sidebar-nav-item${item.active ? ' is-active' : ''}`}
            >
              <span className="sidebar-nav-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span className="sidebar-nav-label">{item.label}</span>
            </div>
          ))}
        </nav>
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

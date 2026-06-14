import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../Auth/AuthContext'
import LogoutModal from './LogoutModal'

const Header = () => {
  const { user, logout } = useContext(AuthContext)
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    const now = new Date()
    setCurrentDate(
      now.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    )
  }, [])

  const handleConfirmLogout = () => {
    logout()
    setShowLogoutModal(false)
  }

  return (
    <>
      <div className="header">
        <div className="header-left">
          <div className="header-avatar">
            {user?.name?.charAt(0).toUpperCase() || 'G'}
          </div>
          <div className="header-info">
            <span className="header-greeting">Workspace ready</span>
            <h2 className="header-name">{user?.name || 'Guest'}</h2>
            <p className="header-subtitle">
              Maintain clarity across your tasks, deadlines, and team decisions.
            </p>
          </div>
        </div>

        <div className="header-right">
          <div className="header-date-block">
            <span className="header-date-label">Today</span>
            <span className="header-date">{currentDate}</span>
          </div>

          <span className="badge badge-role">
            <span
              className={`status-dot ${
                user?.role === 'admin' ? 'status-dot-admin' : 'status-dot-user'
              }`}
            ></span>
            {user?.role || 'User'}
          </span>

          <button onClick={() => setShowLogoutModal(true)} className="btn btn-danger btn-sm">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="btn-text-desktop">Sign Out</span>
          </button>
        </div>
      </div>

      <LogoutModal
        isOpen={showLogoutModal}
        onConfirm={handleConfirmLogout}
        onCancel={() => setShowLogoutModal(false)}
      />
    </>
  )
}

export default Header

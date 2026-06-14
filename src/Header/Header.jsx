import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../Auth/AuthContext'
import LogoutModal from './LogoutModal'

const Header = () => {
  const { user, logout } = useContext(AuthContext)
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    const now = new Date()
    setCurrentDate(now.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }))
  }, [])

  const handleLogoutClick = () => {
    setShowLogoutModal(true)
  }

  const handleConfirmLogout = () => {
    logout()
    setShowLogoutModal(false)
  }

  const handleCancelLogout = () => {
    setShowLogoutModal(false)
  }

  return (
    <>
      <div className="header">
        {/* Left side — Avatar + Greeting */}
        <div className="header-left">
          <div className="header-avatar">
            {user?.name?.charAt(0).toUpperCase() || 'G'}
          </div>
          <div className="header-info">
            <span className="header-greeting">Welcome back,</span>
            <h2 className="header-name">
              {user?.name || 'Guest'} 👋
            </h2>
          </div>
        </div>

        {/* Right side — Date, Role, Logout */}
        <div className="header-right">
          <span className="header-date">{currentDate}</span>
          
          <span className="badge badge-role">
            <span style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: user?.role === 'admin' ? '#c084fc' : 'var(--accent)',
              display: 'inline-block',
            }}></span>
            {user?.role || 'User'}
          </span>

          <button onClick={handleLogoutClick} className="btn btn-danger btn-sm">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="btn-text-desktop">Sign Out</span>
          </button>
        </div>
      </div>

      <LogoutModal 
        isOpen={showLogoutModal}
        onConfirm={handleConfirmLogout}
        onCancel={handleCancelLogout}
      />
    </>
  )
}

export default Header

import React, { useContext, useState, useCallback } from 'react'
import Loginpage from './Loginpage/Loginpage'
import EmployeDashboard from './Dashboard/EmployeDashboard'
import AdminDashboard from './Dashboard/AdminDashboard'
import { AuthContext } from './Auth/AuthContext'

const App = () => {
  const authData = useContext(AuthContext)
  const [toast, setToast] = useState(null)

  const showToast = useCallback((message, type = 'error') => {
    setToast({ message, type, id: Date.now() })
    setTimeout(() => setToast(null), 3500)
  }, [])

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      authData.login({ 
        email, 
        role: 'admin', 
        name: 'Admin' 
      })
    } else {
      const foundEmployee = authData?.employe?.find((e) => {
        return email === e.email && password === e.password
      })
      
      if (foundEmployee) {
        authData.login({ 
          ...foundEmployee,  
          role: 'employee'   
        })
      } else {
        showToast('Invalid email or password. Please try again.')
      }
    }
  }

  if (authData.loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p className="loading-text">Loading TaskFlow...</p>
      </div>
    )
  }

  return (
    <>
      {toast && (
        <div className="toast-container">
          <div className={`toast toast-${toast.type}`}>
            <span className="toast-icon">
              {toast.type === 'error' ? (
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              ) : (
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </span>
            {toast.message}
          </div>
        </div>
      )}
      
      {!authData.user ? (
        <Loginpage handleLogin={handleLogin} />
      ) : (
        authData.user.role === 'admin' ? <AdminDashboard /> : <EmployeDashboard />
      )}
    </>
  )
}

export default App
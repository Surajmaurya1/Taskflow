import React, { useState } from 'react'

function Login({ handleLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showDemo, setShowDemo] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(email, password)
  }

  return (
    <div className="login-page">
      <div className="login-layout">
        <section className="login-showcase card-glass">
          <span className="login-kicker">Premium workspace</span>
          <h1>Professional task operations for focused teams.</h1>
          <p>
            TaskFlow brings assignments, progress visibility, and accountability into a cleaner
            interface built for real work.
          </p>

          <div className="login-feature-list">
            <div className="login-feature-item">
              <strong>Sharper visibility</strong>
              <span>Track workload and delivery status without dashboard clutter.</span>
            </div>
            <div className="login-feature-item">
              <strong>Confident delegation</strong>
              <span>Assign work with clearer ownership, categories, and due dates.</span>
            </div>
            <div className="login-feature-item">
              <strong>Executive polish</strong>
              <span>Refined surfaces, calmer motion, and a more trustworthy visual system.</span>
            </div>
          </div>
        </section>

        <div className="login-card">
          <div className="login-brand">
            <div className="brand-icon">TF</div>
            <h2>Welcome back</h2>
            <p>Sign in to access your workspace.</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label className="input-label" htmlFor="email-input">
                Email Address
              </label>
              <div className="input-with-icon">
                <span className="input-icon">
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
                <input
                  id="email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label" htmlFor="password-input">
                Password
              </label>
              <div className="input-with-icon">
                <span className="input-icon">
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>
                <input
                  id="password-input"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="input-action"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                      />
                    </svg>
                  ) : (
                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-lg">
              Access Workspace
            </button>
          </form>

          <div className="login-demo">
            <button
              type="button"
              className={`login-demo-toggle ${showDemo ? 'open' : ''}`}
              onClick={() => setShowDemo(!showDemo)}
            >
              <span>Demo Credentials</span>
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showDemo && (
              <div className="login-demo-content">
                <p>
                  <strong>Admin:</strong> admin@me.com / 123
                </p>
                <p>
                  <strong>Employee:</strong> suraj@me.com / 123
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

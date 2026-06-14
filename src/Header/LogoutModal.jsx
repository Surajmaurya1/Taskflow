import React from 'react';

const LogoutModal = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      {/* Overlay */}
      <div className="modal-overlay" onClick={onCancel}></div>
      
      {/* Modal */}
      <div className="modal">
        {/* Icon */}
        <div className="modal-icon modal-icon--danger">
          <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </div>

        {/* Content */}
        <div className="modal-body">
          <h3>Sign Out?</h3>
          <p>You'll need to sign in again to access your account and tasks.</p>
        </div>

        {/* Actions */}
        <div className="modal-actions">
          <button onClick={onCancel} className="btn btn-ghost">
            Cancel
          </button>
          <button onClick={onConfirm} className="btn btn-danger">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;

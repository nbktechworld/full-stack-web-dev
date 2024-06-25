import React from 'react';

import './password.css';
import './signup.css';

export default function ResetPasswordForm(props) {
  return (
    <form className="password-form">
      <div className="form-group">
        <label>Reset Password</label>
        <input type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

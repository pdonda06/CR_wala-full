import { useState } from "react";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/auth/login', { // Updated URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login successful!');
        console.log(data);
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-form">
          <h2 className="login-title">Log in To Your Account</h2>
          <p className="login-subtitle">Enter your Account</p>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-btn" onClick={handleSubmit}>Sign in</button>
          {error && <p className="error-text">{error}</p>}
          <p className="or-text">or</p>
          <button className="google-signin">Sign in with Google</button>
          <button className="apple-signin">Sign in with Apple</button>
        </div>
      </div>
      <div className="login-image-container">
        <div className="login-overlay">
          <h2 className="new-here">New Here?</h2>
          <p>Sign up & register to great new opportunities</p>
          <button className="signup-btn">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
import  { useState } from "react";
import "../styles/login.css";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/auth/register', { // Updated URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registration successful!');
        console.log(data);
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('Registration failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-form">
          <h2 className="login-title">Create a New Account</h2>
          <p className="login-subtitle">Enter your Account</p>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div className="form-group">
            <label>Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button className="login-btn" onClick={handleSubmit}>Register</button>
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
          <button className="signup-btn">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
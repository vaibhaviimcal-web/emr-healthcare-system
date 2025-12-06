import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <div className="container">
            <h1 className="logo">EMR System</h1>
            <ul className="nav-links">
              <li><a href="#dashboard">Dashboard</a></li>
              <li><a href="#patients">Patients</a></li>
              <li><a href="#records">Records</a></li>
              <li><a href="#settings">Settings</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <div className="container">
          <section className="hero">
            <h1 className="title">EMR Healthcare System</h1>
            <p className="subtitle">Welcome to the Electronic Medical Records System</p>
            <p className="description">
              A comprehensive platform for managing electronic medical records with advanced features for healthcare professionals.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </section>

          <section className="features">
            <div className="feature-grid">
              <div className="feature-card">
                <h3>📋 Patient Records</h3>
                <p>Securely manage and access patient medical records in one place.</p>
              </div>
              <div className="feature-card">
                <h3>📊 Analytics</h3>
                <p>Gain insights with comprehensive health analytics and reporting tools.</p>
              </div>
              <div className="feature-card">
                <h3>🔒 Security</h3>
                <p>Enterprise-grade security to protect sensitive medical information.</p>
              </div>
              <div className="feature-card">
                <h3>⚡ Performance</h3>
                <p>Lightning-fast access to medical records and critical information.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 EMR Healthcare System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

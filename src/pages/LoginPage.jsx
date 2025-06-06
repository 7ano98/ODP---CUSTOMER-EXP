import React from 'react';
import LoginForm from '../components/LoginForm';
import styles from '../styles/LoginPage.module.css';

const LoginPage = ({ onForgotPassword, onDashboard }) => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.leftPanel}>
        <LoginForm onForgotPassword={onForgotPassword} onDashboard={onDashboard} />
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.dashboardInfo}>
          <h1 className={styles.dashboardTitle}>
            <span className={styles.dashboard360}>360</span><br />
            <span className={styles.dashboardCustomer}>Customer Experience</span><br />
            <span className={styles.dashboardDashboard}>Dashboard</span>
          </h1>
          <p className={styles.dashboardDesc}>
            A 360-degree dashboard provides a comprehensive, all-in-one overview of key information.<br />
            It brings together data from multiple sources for a holistic, real-time snapshot.
          </p>
        </div>
      </div>
      <img src={require('../assets/background.png')} alt="Background" className={styles.bgImage} />
    </div>
  );
};

export default LoginPage; 
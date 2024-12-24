import React from 'react';
import styles from '../styles/Navbar.module.css'; // Use the styles object
import logo from '../assets/images/HiveLogo.png';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-left']}>
        <img src={logo} alt="Logo" className={styles['navbar-logo']} />
        <span className={styles['navbar-text']}>Swift</span><span className={styles.hiveText}>Hive</span>
        
      </div>
      <div className={styles['navbar-right']}>
        <button className={styles['navbar-button']}>Home</button>
        <button className={styles['navbar-button']}>Explore</button>
        <button className={styles['navbar-button']}>Pricing</button>
        <button className={`${styles['navbar-button']} ${styles['login-button']}`}>
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

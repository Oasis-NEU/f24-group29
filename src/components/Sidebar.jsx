// Sidebar.js
import React from 'react';

const Sidebar = ({ onSelect }) => {
  return (
    <div style={styles.sidebar}>
      <button onClick={() => onSelect('dashboard')}>Dashboard</button>
      <button onClick={() => onSelect('myJobs')}>My Jobs</button>
      <button onClick={() => onSelect('resources')}>Resources</button>
      <button onClick={() => onSelect('settings')}>Settings</button>
      <button onClick={() => onSelect('help')}>Help</button>
    </div>
  );
};

const styles = {
  sidebar: {
    height: '100vh',
    width: '200px',
    backgroundColor: '#333',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '10px'
  },
};

export default Sidebar;

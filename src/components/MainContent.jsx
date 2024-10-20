// MainContent.js
import React from 'react';

const MainContent = ({ selectedTab }) => {
  const renderContent = () => {
    switch (selectedTab) {
      case 'dashboard':
        return <h1>Dashboard Content</h1>;
      case 'myJobs':
        return <h1>My Jobs Content</h1>;
      case 'resources':
        return <h1>Resources Content</h1>;
      case 'settings':
        return <h1>Settings Content</h1>;
      case 'help':
        return <h1>Help Content</h1>;
      default:
        return <h1>Welcome! Select a tab.</h1>;
    }
  };

  return (
    <div style={styles.content}>
      {renderContent()}
    </div>
  );
};

const styles = {
  content: {
    padding: '20px',
    width: '100%',
    height: '100vh',
  },
};

export default MainContent;

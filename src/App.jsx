// App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('');

  return (
    <div style={styles.container}>
      <Sidebar onSelect={setSelectedTab} />
      <MainContent selectedTab={selectedTab} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
};

export default App;

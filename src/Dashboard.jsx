import React, { useState } from 'react';
import './Dashboard.css'; // Create this CSS file for styling if needed

const Dashboard = () => {
  // Initial user data
  const initialUserData = {
    name: "John Doe",
    profilePicture: "https://via.placeholder.com/80",
    aboutMe: "I am a software engineer looking to advance my skills in JavaScript.",
    progress: 25, // Represents progress in percentage
  };

  const [userData, setUserData] = useState(initialUserData);

  // Save "About Me" text
  const saveAboutMe = () => {
    alert("About Me section updated!");
  };

  // Update progress
  const updateProgress = () => {
    setUserData((prevData) => ({
      ...prevData,
      progress: Math.min(100, prevData.progress + 10), // Increment by 10% up to 100%
    }));
  };

  return (
    <div className="dashboard">
      {/* Profile Section */}
      <div className="profile-section">
        <img src={userData.profilePicture} alt="Profile" className="profile-picture" />
        <div className="name">{userData.name}</div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Welcome Message */}
        <div className="welcome">Welcome, {userData.name}!</div>

        {/* About Me Section */}
        <div className="about-me">
          <h3>About Me</h3>
          <textarea
            value={userData.aboutMe}
            onChange={(e) => setUserData({ ...userData, aboutMe: e.target.value })}
            placeholder="Enter your career goals or ambitions..."
          />
          <button onClick={saveAboutMe}>Save</button>
        </div>

        {/* Progress Tracker */}
        <div className="progress-tracker">
          <h3>Progress Tracker</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${userData.progress}%` }}></div>
          </div>
          <p>Progress: {userData.progress}%</p>
          <button onClick={updateProgress}>Update Progress</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

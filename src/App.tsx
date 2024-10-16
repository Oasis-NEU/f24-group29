import { useState } from "react";
import "./App.css";
import Tab from "./components/Tab";
import AllJobs from "./pages/my-jobs/AllJobs";
import Pipeline from "./pages/my-jobs/Pipeline";
import Notes from "./pages/my-jobs/Notes";

function App() {
  type TabName = "All Jobs" | "Pipeline" | "Notes";

  const [selectedTab, setSelectedTab] = useState<TabName>("All Jobs");

  function createTab(name: TabName) {
    return (
      <Tab
        name={name}
        isSelected={selectedTab === name}
        onClick={() => setSelectedTab(name)}
      />
    );
  }

  const contentMap = {
    "All Jobs": <AllJobs />,
    Pipeline: <Pipeline />,
    Notes: <Notes />,
  };

  return (
    <>
      <div className="tabs">
        {createTab("All Jobs")}
        {createTab("Pipeline")}
        {createTab("Notes")}
      </div>
      <div className="content">{contentMap[selectedTab]}</div>
    </>
  );
  // return (
  //   <p></p>
  // )
}

export default App;

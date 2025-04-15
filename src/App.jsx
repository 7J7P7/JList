import { useState } from "react";
import { TSMTab, SMTab, TasksTab, StatsTab } from "./components/DashboardTabs";
import { useTheme } from "./components/ThemeContext";

const tabs = ["tasks", "tsm", "sm", "stats"];

export default function App() {
  const [activeTab, setActiveTab] = useState("tsm");
  const { tabThemes, handleThemeChange } = useTheme();

  return (
    <div className={`min-h-screen p-4 bg-${tabThemes[activeTab]}-100`}>
      <h1 className="text-2xl font-bold mb-4">JList</h1>
      <div className="flex gap-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded font-medium shadow ${
              activeTab === tab ? `bg-${tabThemes[tab]}-500 text-white` : `bg-white border`
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="mb-6">
        <label className="font-medium mr-2">Change Theme Color:</label>
        <select
          value={tabThemes[activeTab]}
          onChange={(e) => handleThemeChange(activeTab, e.target.value)}
          className="p-2 border rounded"
        >
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="pink">Pink</option>
          <option value="orange">Orange</option>
          <option value="purple">Purple</option>
        </select>
      </div>

      <div>
        {activeTab === "tsm" && <TSMTab />}
        {activeTab === "sm" && <SMTab />}
        {activeTab === "tasks" && <TasksTab />}
        {activeTab === "stats" && <StatsTab />}
      </div>
    </div>
  );
}

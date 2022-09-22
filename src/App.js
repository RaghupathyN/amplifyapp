import logo from './logo.svg';
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
import './App.css';
import DashboardMessages from './components/DashboardMessages';
import DashboardTasks from './components/DashboardTasks';

function App() {
  return (
    <Routes>
      <Route path='messages/dashboard/messages' element={<DashboardMessages />} />
      <Route className = "dashboard" path="/" element={<Dashboard />}>
        <Route
          path="messages"
          element={<DashboardMessages />}>
            <Route className = "dashboard"
              path="dashboard"
              element={<Dashboard />}>
                  <Route
                    path="messages"
                    element={<DashboardMessages />}>
                  </Route>
            </Route>
        </Route>
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
    </Routes>
  );
}

export default App;

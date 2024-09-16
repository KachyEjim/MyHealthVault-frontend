import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/website/LandingPage";
import Dashboard from "./components/dashboard/Dashboard";
import DashboardWrapper from "./components/dashboard/DashboardWrapper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardWrapper />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DarlingPage from "./components/darling/DarlingPage";
import Weather from "./components/weather/Weather";
import InfomationPage from "./components/InfomationPage";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="app">
        <Router>
          <div>
            <Routes>
              <Route path="darling" element={<DarlingPage />} />
              <Route path="weather" element={<Weather />} />
              <Route path="/" element={<InfomationPage />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

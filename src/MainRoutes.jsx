import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import CardDetails from "./components/CardDetails/CardDetails";

function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/card/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

export default MainRoutes;

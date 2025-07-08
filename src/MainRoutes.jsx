import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./screens/Home/App";
import CardDetails from "./screens/DetailsPage/CardDetails/CardDetails";

function MainRoutes() {
  return (
    <Router basename="/video-app">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/card/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

export default MainRoutes;

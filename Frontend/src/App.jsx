import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Consultant from "./pages/Consultant";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/consultant" element={<Consultant />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
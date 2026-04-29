import { Navigate, Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout.jsx";
import { ScrollToHash } from "./components/ScrollToHash.jsx";
import { Home } from "./pages/Home.jsx";
import { Privacy } from "./pages/Privacy.jsx";
import { Terms } from "./pages/Terms.jsx";

function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

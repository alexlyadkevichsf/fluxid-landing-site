import { Navigate, Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout.jsx";
import { ScrollToHash } from "./components/ScrollToHash.jsx";
import { Home } from "./pages/Home.jsx";

function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

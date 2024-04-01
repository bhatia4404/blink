import { AppBar } from "./components/AppBar";
import { SignUp } from "./pages/signup";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homepage";
import { Help } from "./pages/help";
import { Services } from "./pages/services";
import { About } from "./pages/about";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <div className="app mt-[150px] relative">
      <BrowserRouter>
        <RecoilRoot>
          <AppBar />
        </RecoilRoot>

        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/help" element={<Help />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

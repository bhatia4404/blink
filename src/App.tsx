import { AppBar } from "./components/AppBar";
import { SignUp } from "./pages/signup";
import { Redirect } from "./components/redirect";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homepage";
import { Help } from "./pages/help";
import { Services } from "./pages/services";
import { About } from "./pages/about";
import { RecoilRoot } from "recoil";
import { SignIn } from "./pages/signin";
import { Dashboard } from "./pages/dashboard";
function App() {
  localStorage.removeItem("token");
  return (
    <div className="app mt-[150px] relative">
      <RecoilRoot>
        <BrowserRouter>
          <AppBar />

          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/help" element={<Help />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/home" />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;

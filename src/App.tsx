import { AppBar } from "./components/AppBar";
import { SignUp } from "./pages/signup";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homepage";
import { Help } from "./pages/help";
import { Services } from "./pages/services";
import { About } from "./pages/about";
import { RecoilRoot } from "recoil";
import { SignIn } from "./pages/signin";
import { Dashboard } from "./pages/dashboard";

import { Login } from "./components/loginplease";
import { Transfer } from "./pages/transfer";
import { Profile } from "./pages/profile";
import { ChangeName } from "./pages/changename";
import { ChangePin } from "./pages/changepin";
import { ChangePassword } from "./pages/changepassword";
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
            <Route path="/signedup" element={<Login />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/change">
              <Route path="*" element={<Navigate to="/dashboard" />} />
              <Route path="/change/name" element={<ChangeName />} />
              <Route path="/change/pin" element={<ChangePin />} />
              <Route path="/change/password" element={<ChangePassword />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;

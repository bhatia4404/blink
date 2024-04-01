import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { TabVertical } from "./TabVertical";
export function MenuTabs() {
  const [activeTabs, setActiveTabs] = useState([1, 0, 0, 0, 0]);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname == "/home") {
      setActiveTabs([1, 0, 0, 0, 0]);
    } else if (pathname == "/signup") {
      setActiveTabs([0, 1, 0, 0, 0]);
    } else if (pathname == "/help") {
      setActiveTabs([0, 0, 1, 0, 0]);
    } else if (pathname == "/services") {
      setActiveTabs([0, 0, 0, 1, 0]);
    } else if (pathname == "/about") {
      setActiveTabs([0, 0, 0, 0, 1]);
    }
  }, [pathname]);

  const navigate = useNavigate();
  return (
    <ul className="tabs flex flex-col gap-7 whitespace-nowrap bg-white text-md ">
      <TabVertical
        text="Home"
        active={activeTabs[0]}
        onClick={() => {
          // setActiveTabs([1, 0, 0, 0, 0]);
          navigate("/home");
        }}
      />
      <TabVertical
        text="Create Account"
        active={activeTabs[1]}
        onClick={() => {
          // setActiveTabs([0, 1, 0, 0, 0]);
          navigate("/signup");
        }}
      />
      <TabVertical
        text="Help"
        active={activeTabs[2]}
        onClick={() => {
          // setActiveTabs([0, 0, 1, 0, 0]);
          navigate("/help");
        }}
      />
      <TabVertical
        text="Services"
        active={activeTabs[3]}
        onClick={() => {
          // setActiveTabs([0, 0, 0, 1, 0]);
          navigate("/services");
        }}
      />
      <TabVertical
        text="About"
        active={activeTabs[4]}
        onClick={() => {
          // setActiveTabs([0, 0, 0, 0, 1]);
          navigate("/about");
        }}
      />
    </ul>
  );
}

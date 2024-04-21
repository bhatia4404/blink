import { useEffect, useState } from "react";
import { Tab } from "./Tab";
import { useLocation, useNavigate } from "react-router-dom";
import { activeTabsAtom } from "../atoms/activeTabs";
import { useRecoilState } from "recoil";
export function Tabs() {
  const [activeTabs, setActiveTabs] = useRecoilState(activeTabsAtom);
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
    <ul className="tabs flex justify-around gap-14 whitespace-nowrap max-xl:hidden">
      <Tab
        text="Home"
        active={activeTabs[0]}
        onClick={() => {
          // setActiveTabs([1, 0, 0, 0, 0]);
          navigate("/home");
        }}
      />
      <Tab
        text="Create Account"
        active={activeTabs[1]}
        onClick={() => {
          // setActiveTabs([0, 1, 0, 0, 0]);
          navigate("/signup");
        }}
      />
      <Tab
        text="Help"
        active={activeTabs[2]}
        onClick={() => {
          // setActiveTabs([0, 0, 1, 0, 0]);
          navigate("/help");
        }}
      />
      <Tab
        text="Services"
        active={activeTabs[3]}
        onClick={() => {
          // setActiveTabs([0, 0, 0, 1, 0]);
          navigate("/services");
        }}
      />
      <Tab
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

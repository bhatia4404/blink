import { useState } from "react";
import { Tab } from "./Tab";

export function Tabs() {
  const [activeTabs, setActiveTabs] = useState([1, 0, 0, 0, 0, 0, 0]);
  return (
    <ul className="tabs flex justify-around gap-8 whitespace-nowrap max-xl:hidden">
      <Tab
        text="Personal"
        active={activeTabs[0]}
        onClick={() => {
          setActiveTabs([1, 0, 0, 0, 0, 0, 0]);
        }}
      />
      <Tab
        text="Business"
        active={activeTabs[1]}
        onClick={() => {
          setActiveTabs([0, 1, 0, 0, 0, 0, 0]);
        }}
      />
      <Tab
        text="Corporate"
        active={activeTabs[2]}
        onClick={() => {
          setActiveTabs([0, 0, 1, 0, 0, 0, 0]);
        }}
      />
      <Tab
        text="Private Banking"
        active={activeTabs[3]}
        onClick={() => {
          setActiveTabs([0, 0, 0, 1, 0, 0, 0]);
        }}
      />
      <Tab
        text="Privy Leage"
        active={activeTabs[4]}
        onClick={() => {
          setActiveTabs([0, 0, 0, 0, 1, 0, 0]);
        }}
      />
      <Tab
        text="NRI Services"
        active={activeTabs[5]}
        onClick={() => {
          setActiveTabs([0, 0, 0, 0, 0, 1, 0]);
        }}
      />
      <Tab
        text="Investors"
        active={activeTabs[6]}
        onClick={() => {
          setActiveTabs([0, 0, 0, 0, 0, 0, 1]);
        }}
      />
    </ul>
  );
}

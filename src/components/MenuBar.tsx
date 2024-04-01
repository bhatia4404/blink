import { useState } from "react";
import { MenuTabs } from "./menutabs";
import menu from "../img/menu.svg";
export function MenuBar() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex relative">
      <button
        onClick={function () {
          setVisible(!visible);
        }}
        className="xl:hidden"
      >
        <img src={menu} />
      </button>
      <div
        className={`menu ${
          !visible ? "hidden" : ""
        } absolute top-[50px] shadow-blue2 shadow-md xl:hidden rounded-xl bg-white pt-[10px] pb-[10px] pl-[30px] pr-[30px] z-[3]`}
        onClick={() => setVisible(false)}
      >
        <MenuTabs />
      </div>
    </div>
  );
}

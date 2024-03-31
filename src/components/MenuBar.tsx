import { useState } from "react";
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
      <div className={`menu ${!visible ? "hidden" : ""} absolute top-5`}>
        <ul className="menu_list">
          <li>hi</li>
          <li>hello</li>
        </ul>
      </div>
    </div>
  );
}

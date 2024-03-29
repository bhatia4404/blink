import { useState } from "react";

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // height=""
          viewBox="0 -960 960 960"
          width="24"
          className="fill-blue8 h-[30px] w-[30px]"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
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

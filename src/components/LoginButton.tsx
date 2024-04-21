import { useNavigate } from "react-router-dom";
import user from "../img/user.svg";
import { useSetRecoilState } from "recoil";
import { activeTabsAtom } from "../atoms/activeTabs";

export function LoginButton() {
  const navigate = useNavigate();
  const setActiveTabs = useSetRecoilState(activeTabsAtom);
  return (
    <button
      className="flex border-white border-[2px] rounded-full pt-[1px] pb-[1px] pl-[6px] pr-[8px] gap-2"
      onClick={() => {
        navigate("/signin");
        setActiveTabs([0, 0, 0, 0, 0]);
      }}
    >
      <img src={user} />

      <p className="text-white font-roboto font-medium">Login</p>
    </button>
  );
}

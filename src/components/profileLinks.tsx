import { useNavigate } from "react-router-dom";
import { tokenAtom } from "../atoms/currentUser";
import { useSetRecoilState } from "recoil";
export function ProfileLink({ title, path }: { title: string; path: string }) {
  const navigate = useNavigate();
  return (
    <div className="pl-[10px] pr-[10px]">
      <a className="pl-[10px] pr-[10px]" onClick={() => navigate(path)}>
        {title}
      </a>
    </div>
  );
}

export function ProfileLinkLogout() {
  const setToken = useSetRecoilState(tokenAtom);
  const navigate = useNavigate();
  return (
    <div className="pl-[10px] pr-[10px]">
      <a
        className="pl-[10px] pr-[10px]"
        onClick={function () {
          localStorage.removeItem("token");
          setToken("");
          navigate("/");
        }}
      >
        Logout
      </a>
    </div>
  );
}

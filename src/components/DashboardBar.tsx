import { useState } from "react";
import { Brand } from "../components/Brand";
import user from "../img/user.svg";
import { ProfileLink, ProfileLinkLogout } from "./profileLinks";
import { useRecoilValue } from "recoil";
import { CurrentUserSelector } from "../atoms/currentUser";
import { useNavigate } from "react-router-dom";
export function DashboardBar() {
  const currentUser = useRecoilValue(CurrentUserSelector);
  const [profileLinksVisible, setProfileLinksVisible] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex fixed top-0 w-[100%]  bg-blue1 shadow-gray-200 shadow-lg z-[1] justify-around items-center">
      <button
        className="side-brand flex items-center"
        onClick={function () {
          navigate("/dashboard");
        }}
      >
        <Brand />
      </button>
      <p className="font-lugrasimo text-md font-bold text-blue8">
        Welcome{" "}
        <span className="ml-[8px]">{`${currentUser.firstname} ${currentUser.lastname}`}</span>
      </p>
      <button
        className="flex items-center bg-blue8
         rounded-full p-[12px]"
        onClick={() => {
          setProfileLinksVisible((profileLinksVisible) => !profileLinksVisible);
        }}
      >
        <img src={user} />
        {/* <p className="text-white font-roboto font-medium">My Profile</p> */}
      </button>
      <div
        className={`absolute right-[70px] top-[60px] bg-blue1 flex flex-col gap-2 pt-[10px] pb-[10px] rounded-lg text-blue8  font-roboto font-medium ${
          profileLinksVisible ? "" : "hidden"
        }`}
      >
        <ProfileLink title="My Profile" path="/profile" />

        {true ? <hr /> : ""}
        <ProfileLinkLogout />
      </div>
    </div>
  );
}

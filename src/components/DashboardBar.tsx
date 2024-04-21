import { useState } from "react";
import { Brand } from "../components/Brand";
import user from "../img/user.svg";
import { ProfileLink, ProfileLinkLogout } from "./profileLinks";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CurrentUserSelector } from "../atoms/currentUser";
export function DashboardBar() {
  const currentUser = useRecoilValue(CurrentUserSelector);
  const [profileLinksVisible, setProfileLinksVisible] = useState(false);

  return (
    <div className="flex fixed top-0 w-[100%]  bg-blue1 shadow-gray-200 shadow-lg z-[1] justify-around items-center">
      <div className="side-brand flex items-center">
        <Brand />
      </div>
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
        <hr />
        <ProfileLink title="Change Name" path="/changename" />
        <hr className="" />
        <ProfileLink title="Change Password" path="/changepin" />
        <hr />
        {true ? <ProfileLink title="Change PIN" path="/changepin" /> : ""}
        {true ? <hr /> : ""}
        <ProfileLinkLogout />
      </div>
    </div>
  );
}

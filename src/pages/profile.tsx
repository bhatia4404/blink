import { useRecoilValue } from "recoil";
import { CurrentUserSelector } from "../atoms/currentUser";
import rightarrow from "../img/rightarrow.svg";
import infosvg from "../img/info.svg";
import { useNavigate } from "react-router-dom";
import { DashboardBar } from "../components/DashboardBar";
export function Profile() {
  const navigate = useNavigate();
  const user = useRecoilValue(CurrentUserSelector);
  return (
    <div className="profile">
      <DashboardBar />
      <div className="flex justify-around">
        <div className="ml-[50px] flex flex-col gap-4">
          <div className="initials_name flex items-center gap-4">
            <p className="text-5xl bg-blue8 text-white rounded-full pl-[10px] pr-[10px] pt-[15px] pb-[15px] w-fit font-roboto">{`${user.firstname[0]}${user.lastname[0]}`}</p>
            <div className="name_blinkid flex flex-col ">
              <p className="text-4xl font-roboto font-semibold text-blue8">
                {user.firstname} {user.lastname}
              </p>
              <p className="text-roboto font-semibold text-blue7">
                {user.blinkId}
              </p>
            </div>
          </div>
          <div className="details">
            <p>
              <span className="text-blue7 font-semibold font-roboto">
                Email :{" "}
              </span>
              <span className="text-blue9 font-roboto font-semibold">
                {user.email}
              </span>
            </p>
            <p>
              <span className="text-blue7 font-semibold font-roboto">
                Balance :{" "}
              </span>
              <span className="text-blue9 font-roboto font-semibold">
                {user.balance}
              </span>
            </p>
          </div>
        </div>
        <div className="update_section flex flex-col gap-6">
          <p className="text-3xl font-robto font-bold text-blue9">
            Update Details
          </p>
          <div className="fields">
            <button
              className="text-2xl font-semibold font-roboto flex items-center gap-2 hover:text-blue7"
              onClick={function () {
                navigate("/change/name");
              }}
            >
              <img src={rightarrow} alt="" className="" />
              Change Name
            </button>
            {user.card.exists ? (
              <button
                className="text-2xl font-semibold font-roboto flex items-center gap-2 hover:text-blue7 hover:activesvg"
                onClick={function () {
                  navigate("/change/pin");
                }}
              >
                <img src={rightarrow} alt="" className="" />
                Delete Card
              </button>
            ) : (
              <></>
            )}
            <button
              className="text-2xl font-semibold font-roboto flex items-center gap-2 hover:text-blue7"
              onClick={function () {
                navigate("/change/password");
              }}
            >
              <img src={rightarrow} alt="" className="" />
              Change Password
            </button>
          </div>
          <div className="message flex items-start gap-2">
            <img src={infosvg} alt="" />
            <p className="text-red font-semibold">
              Changes will be reflected after your next login.
            </p>
          </div>
        </div>
      </div>
      <p className="text-center mt-[50px] font-roboto text-bluepeach5 font-semibold">
        We are actively engaged in the development of new features, which will
        be made available in the near future. Stay informed by following our
        updates!
      </p>
    </div>
  );
}

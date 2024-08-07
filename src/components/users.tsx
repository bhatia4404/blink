import { useRecoilValue } from "recoil";
import { UsersSelector } from "../atoms/users";
import { CurrentUserSelector } from "../atoms/currentUser";
import { useNavigate } from "react-router-dom";
import { capitalize } from "../helpers/capitalize";
export function Users() {
  const navigate = useNavigate();
  const users = useRecoilValue(UsersSelector);
  const currentUser = useRecoilValue(CurrentUserSelector);
  return (
    <div className="users flex flex-col gap-4 ml-[5px] ">
      {users.length === 0 ? (
        <p className="text-sm font-medium text-blue8">No users found</p>
      ) : (
        users.slice(0, 10).map((user: any, i: number) =>
          user.email != currentUser.email ? (
            <div
              className="flex gap-2 items-center justify-between font-medium text-blue8"
              key={i}
            >
              <div className="iniitals_username flex items-center gap-3">
                <div className="bg-blue2 pl-[4px] pr-[4px] rounded-full text-lg">
                  {`${capitalize(user.firstname[0])}${capitalize(
                    user.lastname[0]
                  )}`}
                </div>
                <div className="username">
                  {capitalize(user.firstname)} {capitalize(user.lastname)}
                </div>
              </div>
              <button
                className="bg-blue2 pl-[10px] pr-[10px] rounded-xl"
                onClick={function () {
                  navigate(
                    `/transfer?to=${user.blinkId}&firstname=${user.firstname}`
                  );
                }}
              >
                Send
              </button>
            </div>
          ) : (
            ""
          )
        )
      )}
    </div>
  );
}

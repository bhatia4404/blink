import { DashboardBar } from "../components/DashboardBar";
import { Balance } from "../components/balance";
import { SendMoneyUsers } from "../components/sendmoneyusers";

import { CardNtransactions } from "../components/card";
import { useRecoilValue } from "recoil";
import { CurrentUserSelector, tokenAtom } from "../atoms/currentUser";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const token = useRecoilValue(tokenAtom);
  const navigate = useNavigate();

  const currentUser = useRecoilValue(CurrentUserSelector);
  return token ? (
    <div>
      <DashboardBar />
      <div className="flex gap-2 justify-around w-full">
        <div className="w-[40%]">
          <Balance balance={currentUser.balance} />
          <hr className="text-blue8" />
          <SendMoneyUsers />
        </div>

        <CardNtransactions
          card={currentUser.card}
          name={`${currentUser.firstname} ${currentUser.lastname}`}
          transactions={currentUser.transactions}
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center">
      <p className="text-blue8 font-semibold text-xl text-center">
        You were logged out from your previous session. <br />
        Please login again.
      </p>
      <a
        className="signin bg-blue2 w-fit text-blue8 text-xl font-bold pl-3 pr-3 pt-2 pb-2  rounded-full hover:bg-blue8 hover:text-white hover:font-semibold transition-colors duration-300 mt-5 hover:cursor-pointer"
        onClick={() => navigate("/signin")}
      >
        Sign in
      </a>
    </div>
  );
}

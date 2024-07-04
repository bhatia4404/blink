import { useSearchParams } from "react-router-dom";
import { DashboardBar } from "../components/DashboardBar";
import theft from "../img/theftblink.svg";
import security from "../img/security.svg";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { tokenAtom } from "../atoms/currentUser";
import { capitalize } from "../helpers/capitalize";
export function Transfer() {
  const token = useRecoilValue(tokenAtom);
  const [searchParms] = useSearchParams();
  const to = searchParms.get("to");
  const firstname: any = searchParms.get("firstname");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [transactionMessage, setTransactionMessage] = useState("");
  // const;
  return (
    <div className="">
      <p className="mb-3 text-center text-bluepeach5 font-semibold">
        Account information, including balance and transaction history, may be
        subject to a temporary delay. Please log in again to ensure the most
        current data is displayed.
      </p>
      <DashboardBar />
      <div>
        <div className="flex justify-around items-center h-[100%] w-full">
          <div className="w-[50%] flex flex-col">
            <img src={theft} className="" />
            <div className="flex items-cente gap-2">
              <img src={security} alt="" />
              <p className="text-[14px] font-roboto text-[#3B3C36] font-semibold">
                For security purposes, it is imperative that you never disclose
                your passcodes to anyone.
              </p>
            </div>
          </div>

          <div className="shadow-xl rounded-xl w-[300px] flex flex-col items-center gap-[20px] pt-[50px] h-[320px] ">
            <div className="initial_name flex gap-4 text-2xl font-roboto items-center font-semibold">
              <p className="bg-[#92e3a9] w-fit pl-[12px] pr-[12px] pt-[4px] pb-[4px] rounded-full">
                {capitalize(firstname[0])}
              </p>
              <p className="">{capitalize(firstname)}</p>
            </div>
            <p className="text-lg text-bluered4 font-bold font-roboto">{to}</p>
            <div className="input flex gap-4 justify-center">
              <p className="text-2xl text-blue8 font-bold">₹</p>

              <input
                type="number"
                placeholder="Amount"
                className="outline-0 w-[70%] border-[1px] border-blue8 rounded-lg pl-[10px] pt-[3px] pb-[3px] text-xl relative text-blue8 focus:border-[2px]"
                onChange={function (e: any) {
                  setAmount(e.target.value);
                }}
              />
            </div>
            <button
              className="signin bg-blue2 w-fit text-blue8 text-xl font-bold pl-3 pr-3 pt-2 pb-2  rounded-full hover:bg-blue8 hover:text-white hover:font-semibold transition-colors duration-300"
              onClick={async function () {
                setLoading(true);
                const res = await fetch(
                  `https://blinkbackend.onrender.com/api/v1/account/transfer?amt=${amount}&to=${to}`,
                  {
                    method: "POST",
                    headers: {
                      authorization: token,
                    },
                  }
                );

                const res2 = await res.json();
                setTransactionMessage(res2.message);
                setLoading(false);
              }}
            >
              {loading ? (
                <svg
                  aria-hidden="true"
                  className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue8"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    className="fill-blue4"
                  />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" />
                </svg>
              ) : (
                <p>Send</p>
              )}
            </button>
            <p className="transaction_message text-blue8">
              {transactionMessage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

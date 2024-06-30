import { useState } from "react";
import { Brand } from "../components/Brand";
import cardsvg from "../img/card.svg";
import { Negative, Positive } from "./transaction";
export function CardNtransactions({
  card,
  name,
  transactions,
}: {
  card: {
    exists: boolean;
    number: number;
    pin: number;
    expiry: string;
    cvv: number;
  };
  name: string;
  transactions: any[];
}) {
  let i = 0;
  const [cvvtext, setcvvtext] = useState("Show CVV");
  const number = card.number ? card.number.toString() : "";
  const [message, setMessage] = useState("");

  return (
    <div className="card_transactions items-end flex flex-col gap-[20px] w-[40%] mid:w-[45%] ">
      <div className="message text-blue7 font-bold">
        <p>{`${message}`}</p>
        <p>{message ? "Please Login again." : ""}</p>
      </div>
      {card.exists ? (
        <div className="card max-w-[350px] max-mid:h-[160px] h-[180px] bg-blue1 w-[100%] pl-[20px] rounded-xl flex flex-col gap-3 relative">
          <div className="flex items-center relative w-fit lg:gap-3">
            <Brand />
            <p className="font-goblin max-mid:text-[16px] text-[24px] text-blue8 max-mid:absolute top-[30px] right-0">
              {" "}
              Card
            </p>
          </div>
          <div className="card_details text-blue8 font-bold text-lg mid:text-2xl">
            <p className="card_number">
              {number.slice(0, 4)} {number.slice(4, 8)} {number.slice(8, 12)}{" "}
              {number.slice(12, 16)}
            </p>
            <p className="expiry">
              <span className="text-[12px] font-semibold">Valid till</span>{" "}
              {card.expiry}
            </p>
            <p className="name">{name}</p>
            <div className="flex gap-3 absolute right-1 bottom-0 ">
              <button
                className="text-xs"
                onClick={function () {
                  setcvvtext(`${card.cvv}`);
                }}
              >
                {cvvtext}
              </button>
              <img src={cardsvg} className="h-[40px] fill-blue8" alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className="card max-w-[350px] max-mid:h-[180px] bg-blue1 h-[200px] w-[100%]  pl-[20px] rounded-xl flex flex-col gap-3 relative">
          <div className="flex items-center relative w-fit lg:gap-3">
            <Brand />
            <p className="font-goblin max-mid:text-[16px] text-[24px] text-blue8 max-mid:absolute top-[30px] right-0">
              {" "}
              Card
            </p>
          </div>
          <div className="card_details text-blue8 font-bold text-lg mid:text-2xl">
            <p className="card_number">**** **** **** ****</p>
            <p className="expiry">
              <span className="text-[12px] font-semibold">Valid till</span>{" "}
              **/**
            </p>
            <p className="name">______________________</p>
            <button
              className="bg-blue8 text-white pl-[5px] pr-[5px] rounded-full text-[16px] "
              onClick={async function () {
                const res = await fetch(
                  `http://ec2-13-48-44-130.eu-north-1.compute.amazonaws.com/api/v1/account/createcard`,
                  {
                    method: "PUT",
                    headers: {
                      authorization: `${localStorage.getItem("token")}`,
                    },
                  }
                );
                const d = await res.json();
                setMessage(d.message);
              }}
            >
              Get a card
            </button>
            <img
              src={cardsvg}
              className="absolute right-1 bottom-0 h-[40px] fill-blue8"
              alt=""
            />
          </div>
        </div>
      )}
      <div className="self-stretch flex flex-col gap-3 pl-[10px] bg-[#F0F8FF] rounded-xl">
        <h1 className="text-blue8 font-roboto font-semibold text-2xl ">
          Transactions
        </h1>

        <div className="transactions max-h-[280px] w-[100%] flex flex-col gap-[10px] overflow-y-scroll">
          {transactions.map((transac) =>
            transac.amt > 0
              ? Positive({
                  amt: transac.amt,
                  from: transac.from,
                  time: transac.time,
                  id: i++,
                })
              : Negative({
                  amt: transac.amt,
                  to: transac.to,
                  time: transac.time,
                  id: i++,
                })
          )}
        </div>
      </div>
    </div>
  );
}

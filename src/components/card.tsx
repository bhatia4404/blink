import { Brand } from "../components/Brand";
import cardsvg from "../img/card.svg";
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
  const number = card.number ? card.number.toString() : "";

  return (
    <div className="card_transactions items-end flex flex-col gap-[50px] w-[40%] mid:w-[45%] ">
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
            <img
              src={cardsvg}
              className="absolute right-1 bottom-0 h-[40px] fill-blue8"
              alt=""
            />
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
            <button className="bg-blue8 text-white pl-[5px] pr-[5px] rounded-full text-[16px] ">
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
      <div className="transactions bg-blue2 h-[280px] w-[100%] ">
        {transactions.map((transac) => (
          <div>
            <p>
              {transac.amt} {transac.to ? transac.to : transac.from}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { date } from "zod";

export function Positive({
  amt,
  from,
  time,
  id,
}: {
  amt: number;
  from: string;
  time: string;
  id: string;
}) {
  const date = new Date(time);

  return (
    <div
      key={id}
      className="transaction rounded-2xl bg-blue8 relative pt-[5px] pb-[15px] text-white font-bold"
    >
      <div className=" mid:ml-[20px] flex gap-2 mid:gap-6 items-center">
        <p>+{amt}</p>
        <p>From :{from}</p>
      </div>
      <p className="absolute right-2 bottom-0 ">
        {`${date.toLocaleTimeString()}`} {"  "}
        {`${date.toLocaleDateString()}`}
      </p>
    </div>
  );
}

export function Negative({
  amt,
  to,
  time,
  id,
}: {
  amt: number;
  to: string;
  time: string;
  id: string;
}) {
  const date = new Date(Date.parse(time));

  return (
    <div
      key={id}
      className="transaction rounded-2xl bg-blue2 text-blue8 font-bold relative pt-[5px] pb-[15px]"
    >
      <div className=" mid:ml-[20px] flex gap-2 mid:gap-6 items-center ">
        <p>{amt}</p>
        <p>To : {to}</p>
      </div>
      <p className="absolute right-2 bottom-0">
        {date.toLocaleTimeString()} {"  "}
        {date.toLocaleDateString()}
      </p>
    </div>
  );
}

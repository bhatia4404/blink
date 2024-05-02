export function Transactions({
  amt,
  from,
  time,
}: {
  amt: number;
  from: string;
  time: number;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="transaction rounded-2xl bg-red relative pt-[12px] pb-[15px] w-[40%]">
        <div className="flex gap-2">
          <p>{amt}</p>
          <p>From :{from}</p>
        </div>
        <p className="absolute right-2 bottom-0">{time} ago</p>
      </div>
      <div className="transaction rounded-2xl bg-red relative pt-[10px] pb-[10px] w-[40%]">
        <div className="flex gap-2">
          <p>{amt}</p>
          <p>{from}</p>
        </div>
        <p className="absolute right-2 bottom-0">{time} ago</p>
      </div>
      <div className="transaction rounded-2xl bg-red relative pt-[10px] pb-[10px] w-[40%]">
        <div className="flex gap-2">
          <p>{amt}</p>
          <p>{from}</p>
        </div>
        <p className="absolute right-2 bottom-0">{time} ago</p>
      </div>
      <div className="transaction rounded-2xl bg-red relative pt-[10px] pb-[10px] w-[40%]">
        <div className="flex gap-2">
          <p>{amt}</p>
          <p>{from}</p>
        </div>
        <p className="absolute right-2 bottom-0">{time} ago</p>
      </div>
      <div className="transaction rounded-2xl bg-red relative pt-[10px] pb-[10px] w-[40%]">
        <div className="flex gap-2">
          <p>{amt}</p>
          <p>{from}</p>
        </div>
        <p className="absolute right-2 bottom-0">{time} ago</p>
      </div>
    </div>
  );
}

export function Balance({ balance }: { balance: number }) {
  return (
    <div className="flex gap-3 items-center">
      <p className="text-lg font-roboto text-blue8 font-bold">
        <span className="mr-[20px]">Your Balance</span>
        {new Intl.NumberFormat("en-in", {
          style: "currency",
          currency: "INR",
        }).format(balance)}
      </p>
      {/* <button>
        <img
          src={icon}
          className="h-[20px]"
          onClick={async function () {
            setCurToken(curToken);
          }}
        />
      </button> */}
    </div>
  );
}

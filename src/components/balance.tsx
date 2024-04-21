export function Balance({ balance }: { balance: number }) {
  return (
    <p className="text-lg font-roboto text-blue8 font-bold">
      <span className="mr-[20px]">Your Balance</span>
      {new Intl.NumberFormat("en-in", {
        style: "currency",
        currency: "INR",
      }).format(balance)}
    </p>
  );
}

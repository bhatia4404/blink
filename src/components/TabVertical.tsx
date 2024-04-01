export function TabVertical({
  text,
  active,
  onClick,
}: {
  text: string;
  active: number;
  onClick: () => void;
}) {
  return (
    <li className={`relative w-fit`} onClick={onClick}>
      <button
        className={`font-roboto font-semibold ${
          active ? "text-blue9" : "text-blue6 "
        } ${active ? "" : "text-blue8"}`}
      >
        {text}
      </button>
      <div className={`h-[4px] bg-blue3 ${!active ? "hidden" : ""}`}></div>
    </li>
  );
}

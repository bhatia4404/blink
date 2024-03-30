export function Tab({
  text,
  active,
  onClick,
}: {
  text: string;
  active: number;
  onClick: () => void;
}) {
  return (
    <li className={`relative`} onClick={onClick}>
      <button
        className={`font-roboto font-semibold ${
          active ? "text-blue9" : "text-blue6 "
        } ${active ? "" : "text-blue8"}`}
      >
        {text}
      </button>
      <div className={`h-[4px] bg-white ${!active ? "hidden" : ""}`}></div>
    </li>
  );
}

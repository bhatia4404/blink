import logo from "../img/eye-100.png";
export function Brand() {
  return (
    <div className="brand flex gap-3 items-center">
      <img src={logo} alt="" className="h-[50px]" />
      <p className="font-goblin text-[24px] text-blue8">blink </p>
    </div>
  );
}

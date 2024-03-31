import user from "../img/user.svg";
export function LoginButton() {
  return (
    <button className="flex border-white border-[2px] rounded-full pt-[1px] pb-[1px] pl-[6px] pr-[8px] gap-2">
      <img src={user} />

      <p className="text-white font-roboto font-medium">Login</p>
    </button>
  );
}

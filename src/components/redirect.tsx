import { useNavigate } from "react-router-dom";

export function Redirect() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <p className="text-blue8 font-semibold text-xl text-center">
        You were logged out from yor previous session. <br />
        Please login again.
      </p>
      <a
        className="signin bg-blue2 w-fit text-blue8 text-xl font-bold pl-3 pr-3 pt-2 pb-2  rounded-full hover:bg-blue8 hover:text-white hover:font-semibold transition-colors duration-300 mt-5 hover:cursor-pointer"
        onClick={() => navigate("/signin")}
      >
        Sign in
      </a>
    </div>
  );
}

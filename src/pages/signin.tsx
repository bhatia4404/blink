import { useState } from "react";
import signinimg from "../img/signin.svg";
import bird from "../img/signuppagebird.svg";
import { useNavigate } from "react-router-dom";
import { tokenAtom } from "../atoms/currentUser";
import error from "../img/error.svg";
import { useSetRecoilState } from "recoil";
export function SignIn() {
  const setToken = useSetRecoilState(tokenAtom);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [errMessages, setErrMessages] = useState([]);
  const navigate = useNavigate();
  return (
    <div className="flex flex-cols justify-around mr-[50px]">
      <img src={signinimg} className="w-[50%]  max-h-[525.4px] " alt="" />
      <div className="signup-bird relative max-w-[440px]  shadow-gray-400 shadow-xl h-[500px]  w-[40%] flex flex-col">
        <img
          src={bird}
          className="absolute -top-[90px] -right-[40px] h-[200px]"
        />
        <div className="inputs flex flex-col gap-5 absolute top-[150px] items-center w-[100%]">
          <input
            type="text"
            placeholder="Email"
            className="outline-0 border-b-[2px] border-b-[#E5E4E2] focus:border-b-blue2 pl-[3px] pr-[3px] pt-[2px] pb-[2px] text-blue8 font-medium w-[65%]"
            onChange={(e) => setInputEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            className="outline-0 border-b-[2px] border-b-[#E5E4E2] focus:border-b-blue2 pl-[3px] pr-[3px] pt-[2px] pb-[2px] text-blue8 font-medium w-[65%]"
            onChange={(e) => setInputPassword(e.target.value)}
          />

          <button
            className="signin bg-blue2 w-fit text-blue8 text-xl font-bold pl-3 pr-3 pt-2 pb-2  rounded-full hover:bg-blue8 hover:text-white hover:font-semibold transition-colors duration-300 mt-5"
            onClick={async function () {
              const res = await fetch(
                "http://localhost:3001/api/v1/user/signin",
                {
                  method: "POST",
                  headers: {
                    "Content-type": "application/json",
                  },
                  body: JSON.stringify({
                    email: inputEmail,
                    password: inputPassword,
                  }),
                }
              );
              const data = await res.json();
              if (data.errors) {
                console.log(data.errors);
                setErrMessages(data.errors);
                return;
              }
              if (data.message != "Logged in") {
                setErrMessages([
                  {
                    message: data.message,
                  },
                ]);
                return;
              }
              setToken(data.token);
              // console.log(data.token);

              localStorage.setItem("token", data.token);
              navigate("/dashboard");
            }}
          >
            Sign In
          </button>
          <ul className="err_message">
            {errMessages.map((err) => (
              <li className="text-[12px] text-red font-semibold flex items-center gap-[4px]">
                <img src={error} alt="" className="h-[16px]" />
                {err.message}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

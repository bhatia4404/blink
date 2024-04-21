import signupimg from "../img/signuppageimg3blue.svg";
import bird from "../img/signuppagebird.svg";
export function SignUp() {
  return (
    <div className="flex justify-around mr-[50px]">
      <img src={signupimg} className="w-[50%]  max-h-[525.4px] " alt="" />
      <div className="signup-bird relative max-w-[440px]  shadow-gray-400 shadow-xl h-[500px]  w-[40%] flex flex-col">
        <img
          src={bird}
          className="absolute -top-[90px] -right-[40px] h-[200px]"
        />
        <div className="inputs flex flex-col gap-5 absolute top-[110px] items-center w-[100%]">
          <input
            type="text"
            placeholder="Firstname"
            className="outline-0 border-b-[2px] border-b-[#E5E4E2] focus:border-b-blue2 pl-[3px] pr-[3px] pt-[2px] pb-[2px] text-blue8 font-medium w-[65%]"
          />
          <input
            type="text"
            placeholder="Lastname"
            className="outline-0 border-b-[2px] border-b-[#E5E4E2] focus:border-b-blue2 pl-[3px] pr-[3px] pt-[2px] pb-[2px] text-blue8 font-medium w-[65%]"
          />
          <input
            type="text"
            placeholder="Email"
            className="outline-0 border-b-[2px] border-b-[#E5E4E2] focus:border-b-blue2 pl-[3px] pr-[3px] pt-[2px] pb-[2px] text-blue8 font-medium w-[65%]"
          />
          <input
            type="text"
            placeholder="Password"
            className="outline-0 border-b-[2px] border-b-[#E5E4E2] focus:border-b-blue2 pl-[3px] pr-[3px] pt-[2px] pb-[2px] text-blue8 font-medium w-[65%]"
          />

          <button className="signup bg-blue2 w-fit text-blue8 text-xl font-bold pl-3 pr-3 pt-2 pb-2  rounded-full hover:bg-blue8 hover:text-white hover:font-semibold transition-colors duration-300 mt-5">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

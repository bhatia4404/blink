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
      </div>
    </div>
  );
}

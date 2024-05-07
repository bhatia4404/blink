import { Chatbot } from "../components/Chatbox";
import img1 from "../img/5124556.jpg";

export function Help() {
  return (
    <div className="">
      <div className="flex items-center justify-around ">
        <img src={img1} className="w-[50%] max-h-[525.4px]" />

        <div className="w-[100%] flex items-center justify-center mb-[150px] ">
          <Chatbot />
        </div>
      </div>
      <h1 className="text-4xl text-center font-roboto font-semibold text-[#60a7ff] text-blue4 border-b-[1px] border-blue6 ">
        Always there for your assistance
      </h1>
    </div>
  );
}

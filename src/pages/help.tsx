import img1 from "../img/chatbot.svg";
import { ChatBot } from "../components/chatbot";
export function Help() {
  return (
    <div className="flex items-center justify-around mr-[50px]">
      <img src={img1} className="w-[50%] max-h-[525.4px]" />
      <ChatBot />
    </div>
  );
}

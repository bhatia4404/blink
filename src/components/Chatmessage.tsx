import { TbMessageChatbot } from "react-icons/tb";
export function Chatmessage(props: any) {
  return (
    <div className={`flex ${props.user && "justify-end"} `}>
      {props.user ? (
        <span className="message-right p-2 border-2 border-blue9 m-2 rounded-xl flex flex-row bg-[#60a7ff]">
          <TbMessageChatbot className="w-[30px] h-[30px] " />
          <span className="text-xl font-semibold ">{props.msg}</span>
        </span>
      ) : (
        <span className="message-left p-2 border-2 border-blue3 m-2  rounded-md flex flex-row bg-[#60a7ff] ">
          <TbMessageChatbot className="w-[30px] h-[30px] " />
          <span className="text-xl font-semibold ">{props.msg}</span>
        </span>
      )}
    </div>
  );
}

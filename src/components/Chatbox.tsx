import { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { Chatmessage } from "../components/Chatmessage";
import { Analyze } from "./Analyze";

export function Chatbot() {
  const [msg, setmsg] = useState([
    {
      msg: "hello! proceed with Name",
    },
  ]);

  const onsend = () => {
    let list = [...msg, { msg: text, user: true }];
    if (list.length > 2) {
      const reply = Analyze(text);
      list = [
        ...list,
        {
          msg: reply,
        },
      ];
    } else {
      list = [
        ...list,
        { msg: `hi ${text} ` },
        {
          msg: "how can i help you",
        },
      ];
    }
    setmsg(list);
    settext("");
    setTimeout(() => {
      document.querySelector("#co")?.scrollIntoView();
    }, 1);
  };

  const [text, settext] = useState("");

  return (
    <div className="flex flex-row justify-center items-center h-[250px] w-[100%] mt-[100px]">
      <div className="bot w-[50%] h-[500px] flex flex-col justify-center items-center">
        <div className="top-bar flex flex-row justify-center items-center mt-0 ">
          <div className="mr-[8px]">
            <FaRobot className=" w-[50px] h-[50px] fill-blue8  " />
          </div>
          <p className="text-4xl font-bold text-blue8 font-serif mr-[5px] ">
            blink-Bot
          </p>
        </div>
        <div className="chat-box w-[80%] mt-[20px]  border-2 border-solid border-gray rounded flex flex-col justify-end bg-[#ddecff] overflow-hidden ">
          {msg.length > 0 && msg.map((data) => <Chatmessage {...data} />)}

          <div className="input-field w-[80%] p-4 flex flex-row justify-center items-center  ">
            <input
              value={text}
              onChange={(e) => settext(e.target.value)}
              type="text"
              className=" border-2 bg-[#60a7ff] rounded-xl text-black w-[75%] m-[4px] text-xl  p-2 outline-none "
            />
            <button
              className="w-[80px] bg-[#60a7ff] border-2 border-black rounded-xl text-xl font-bold h-[48px] ml-[20px] "
              onClick={onsend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import wave from "../img/wave.svg";
export function ChatBot() {
  return (
    <div className="signup-bird relative max-w-[440px]  shadow-gray-400 shadow-xl h-[500px]  w-[40%] flex flex-col">
      {/* <img
        src={wave}
        className="absolute -top-[90px] -right-[40px] h-[200px]"
      /> */}
      <div className="items-center w-[100%]">
        <img src={wave} className="max-h-[200px]" />
        <p className="text-blue8 absolute top-10 left-5 text-3xl font-goblin">
          blink Bot
        </p>
        <p className="font-roboto text-bluepeach5 font-semibold m-4">
          We are actively engaged in the development of new features, which will
          be made available in the near future. Stay informed by following our
          updates!
        </p>
      </div>
    </div>
  );
}

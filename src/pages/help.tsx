import img1 from "../img/5124556.jpg";

export function Help() {
  return (
    <div className="flex flex-row justify-around">
      <div className="w-[40%] h-full p-4 ">
        <img src={img1} />
      </div>
      <div className="w-[40%] h-full p-4  flex flex-col items-center space-y-9 ">
        <h1 className="text-3xl text-center font-roboto text-blue7 border-b-[2px] border-blue8 ">
          Always there for assistance
        </h1>
        <p className="text-blue8 font-semibold font-roboto">Chat Bot</p>
      </div>
    </div>
  );
}
